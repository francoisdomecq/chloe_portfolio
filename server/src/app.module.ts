import { Module } from '@nestjs/common';
import { ProjectsModule } from './domains/projects/projects.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { appConfigSchema } from './config/config.types';
import { typeOrmConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './domains/projects/models/project.entity';
import { AuthConfig, authConfig } from './config/auth.config';
import { TypedConfigService } from './config/typed-config-service';
import { User } from './domains/users/models/user-entity';
import { AuthModule } from './domains/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { VariousModule } from './domains/various/various.module';
import { Various } from './domains/various/models/various.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: TypedConfigService) => ({
        ...configService.get('database'),
        entities: [Project, User, Various],
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, typeOrmConfig, authConfig],
      validationSchema: appConfigSchema,
      validationOptions: {
        abortEarly: true,
      },
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: TypedConfigService) => ({
        secret: config.get<AuthConfig>('auth')?.jwt.secret,
        signOptions: {
          expiresIn: config.get<AuthConfig>('auth')?.jwt.expiresIn,
        },
      }),
    }),
    AuthModule,
    ProjectsModule,
    VariousModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

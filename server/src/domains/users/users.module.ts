import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user-entity';
import { UsersService } from './services/users/users.service';
import { PasswordService } from './services/password/password.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, PasswordService],
  exports: [UsersService],
})
export class UsersModule {}

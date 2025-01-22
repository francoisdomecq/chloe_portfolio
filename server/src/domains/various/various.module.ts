import { Module } from '@nestjs/common';
import { VariousController } from './controller/various.controller';
import { VariousService } from './service/various.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Various } from './models/various.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Various])],
  controllers: [VariousController],
  providers: [VariousService],
})
export class VariousModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VariousService } from '../service/various.service';
import { FindOneParam } from 'src/domains/projects/types/find-one-param';
import { CreateVariousDto } from '../dto/create-various.dto';
import { UserRoles } from '../../users/types';
import { Roles } from 'src/domains/auth/decorators/roles.decorator';
import { Public } from '../../auth/decorators/public.decorator';
import { UpdateVariousDto } from '../dto/update-various.dto';
import { FileInterceptorConfig } from '../../core/utils/file-upload.utils';
import { Various } from '../models/various.entity';

@Controller('various')
export class VariousController {
  constructor(private readonly variousService: VariousService) {}

  @Get('/')
  @Public()
  async findAll() {
    return await this.variousService.findAll();
  }

  @Get('/:id')
  @Public()
  async findById(@Param() { id }: FindOneParam): Promise<Various> {
    return await this.variousService.findById(id);
  }

  @Post('/')
  @Roles(UserRoles.ADMIN)
  async create(@Body() various: CreateVariousDto) {
    return await this.variousService.create(various);
  }

  @Delete('/:id')
  @Roles(UserRoles.ADMIN)
  async delete(@Param() { id }: FindOneParam) {
    return await this.variousService.delete(id);
  }

  @Patch('/:id')
  @Roles(UserRoles.ADMIN)
  async update(
    @Param() { id }: FindOneParam,
    @Body() various: UpdateVariousDto,
  ) {
    console.log(various);
    return await this.variousService.update(id, various);
  }

  @Patch('/:id/file')
  @UseInterceptors(FileInterceptorConfig('various_files'))
  @Roles(UserRoles.ADMIN)
  async addFile(
    @Param() { id }: FindOneParam,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return this.variousService.update(id, { newFileSrc: file.filename });
  }
}

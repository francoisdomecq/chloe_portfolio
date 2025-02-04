import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Various } from '../models/various.entity';
import { Repository } from 'typeorm';
import { CreateVariousDto } from '../dto/create-various.dto';
import { UpdateVariousDto } from '../dto/update-various.dto';
import {
  deleteDirectory,
  deleteFile,
  retrieveFile,
} from '../../core/utils/file-upload.utils';

@Injectable()
export class VariousService {
  constructor(
    @InjectRepository(Various)
    private readonly variousRepository: Repository<Various>,
  ) {}

  async findAll(): Promise<Various[]> {
    const allVarious = await this.variousRepository.find();
    return allVarious.map((various) => ({
      ...various,
      fileSrc: retrieveFile(various.fileSrc, 'various_files', various.id),
    }));
  }

  async findById(id: string): Promise<Various> {
    const various = await this.variousRepository.findOneBy({ id });
    return {
      ...various,
      fileSrc: retrieveFile(various.fileSrc, 'various_files', various.id),
    };
  }

  async create(various: CreateVariousDto): Promise<Various> {
    return await this.variousRepository.save(various);
  }

  async delete(id: string): Promise<void> {
    deleteDirectory('various_files', id);
    await this.variousRepository.delete(id);
  }

  async update(
    id: string,
    various: UpdateVariousDto,
    updateFile = false,
  ): Promise<Various> {
    if (updateFile) {
      const variousToUpdate = await this.variousRepository.findOneBy({ id });
      deleteFile('various_files', id, variousToUpdate.fileSrc);
      various.fileSrc = various.newFileSrc;
      various.newFileSrc = undefined;
    } else {
      various.fileSrc = various.fileSrc.split('/').pop();
    }
    const updatedVarious = await this.variousRepository.update(id, various);
    return updatedVarious.raw[0];
  }
}

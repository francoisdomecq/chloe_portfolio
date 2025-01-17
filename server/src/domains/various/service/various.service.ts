import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Various } from '../models/various.entity';
import { Repository } from 'typeorm';
import { CreateVariousDto } from '../dto/create-various.dto';
import { UpdateVariousDto } from '../dto/update-various.dto';

@Injectable()
export class VariousService {
  constructor(
    @InjectRepository(Various)
    private readonly variousRepository: Repository<Various>,
  ) {}

  async findAll(): Promise<Various[]> {
    return await this.variousRepository.find();
  }

  async findById(id: string): Promise<Various> {
    return await this.variousRepository.findOneBy({ id });
  }

  async create(various: CreateVariousDto): Promise<Various> {
    return await this.variousRepository.save(various);
  }

  async delete(id: string): Promise<void> {
    await this.variousRepository.delete(id);
  }

  async update(id: string, various: UpdateVariousDto): Promise<Various> {
    const updatedVarious = await this.variousRepository.update(id, various);
    return updatedVarious.raw[0];
  }
}

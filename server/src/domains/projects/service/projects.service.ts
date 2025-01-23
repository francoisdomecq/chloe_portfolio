import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  getAllProjects() {
    return this.projectRepository.find();
  }

  getProjectById(id: string) {
    return this.projectRepository.findOneBy({ id });
  }

  addProject(project: CreateProjectDto) {
    return this.projectRepository.save(project);
  }

  async updateProject(id: string, updatedProject: UpdateProjectDto) {
    return await this.projectRepository.update(id, updatedProject);
  }

  async updateProjectContent(id: string, files: Express.Multer.File[]) {
    const formattedFiles = files.map((file) => file.filename);
    return await this.projectRepository.update(id, { content: formattedFiles });
  }

  deleteProject(id: string) {
    return this.projectRepository.delete({ id });
  }
}

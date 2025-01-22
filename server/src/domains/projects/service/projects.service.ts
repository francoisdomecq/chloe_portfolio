import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectContent } from '../models/project-content.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(ProjectContent)
    private readonly projectContentRepository: Repository<ProjectContent>,
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
    await this.projectContentRepository.delete({ project: { id } });

    const projectToUpdate = await this.projectRepository.findOneBy({ id });
    Object.assign(projectToUpdate, updatedProject);

    return this.projectRepository.save(projectToUpdate);
  }

  deleteProject(id: string) {
    return this.projectRepository.delete({ id });
  }
}

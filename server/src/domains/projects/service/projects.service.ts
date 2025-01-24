import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { retrieveFile } from '../../core/utils/file-upload.utils';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getAllProjects() {
    const allProjects = await this.projectRepository.find();
    const projectsWithFiles: Project[] = allProjects.map((project) => {
      const carouselFile = retrieveFile(
        project.carouselImage,
        'projects_files',
        project.id,
      );
      const projectContent = project.content.map((file) =>
        retrieveFile(file, 'projects_files', project.id),
      );
      return {
        ...project,
        carouselImage: carouselFile,
        content: projectContent,
      };
    });
    return projectsWithFiles;
  }

  async getProjectById(id: string): Promise<Project> {
    const foundProject = await this.projectRepository.findOneBy({ id });
    const carouselFile = retrieveFile(
      foundProject.carouselImage,
      'projects_files',
      foundProject.id,
    );
    const projectContent = foundProject.content.map((file) =>
      retrieveFile(file, 'projects_files', foundProject.id),
    );
    return {
      ...foundProject,
      carouselImage: carouselFile,
      content: projectContent,
    };
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

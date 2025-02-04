import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import {
  deleteDirectory,
  deleteFile,
  retrieveFile,
} from '../../core/utils/file-upload.utils';

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
    if (!foundProject) {
      return undefined;
    }
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
    console.log(updatedProject);
    const formattedProject = {
      ...updatedProject,
      carouselImage: updatedProject.carouselImage.split('/').pop(),
      content: updatedProject.content.map((file) => file.split('/').pop()),
      newCarouselImage: undefined,
      newContent: undefined,
    };
    return await this.projectRepository.update(id, formattedProject);
  }

  async updateProjectCarousel(id: string, file: Express.Multer.File) {
    const projectToUpdate = await this.projectRepository.findOneBy({ id });
    if (projectToUpdate.carouselImage) {
      deleteFile('projects_files', id, projectToUpdate.carouselImage);
    }
    return await this.projectRepository.update(id, {
      carouselImage: file.filename,
    });
  }

  async updateProjectContent(id: string, files: Express.Multer.File[]) {
    const projectToUpdate = await this.projectRepository.findOneBy({ id });
    if (projectToUpdate.content) {
      projectToUpdate.content.forEach((file) =>
        deleteFile('projects_files', id, file),
      );
    }
    const formattedFiles = files.map((file) => file.filename);
    return await this.projectRepository.update(id, { content: formattedFiles });
  }

  deleteProject(id: string) {
    deleteDirectory('projects_files', id);
    return this.projectRepository.delete({ id });
  }
}

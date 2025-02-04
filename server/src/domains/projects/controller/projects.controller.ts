import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProjectsService } from '../service/projects.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { FindOneParam } from '../types/find-one-param';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Public } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { UserRoles } from '../../users/types';
import {
  FileInterceptorConfig,
  FilesInterceptorConfig,
} from '../../core/utils/file-upload.utils';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/')
  @Public()
  async getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Get('/:id')
  @Public()
  async getProjectById(@Param() { id }: FindOneParam) {
    return this.projectsService.getProjectById(id);
  }

  @Post('/')
  @Roles(UserRoles.ADMIN)
  async addProject(@Body() createdProject: CreateProjectDto) {
    return this.projectsService.addProject(createdProject);
  }

  @Patch('/:id/content')
  @UseInterceptors(FilesInterceptorConfig('projects_files'))
  @Roles(UserRoles.ADMIN)
  async addProjectContent(
    @Param() { id }: FindOneParam,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.projectsService.updateProjectContent(id, files);
  }

  @Patch('/:id/carousel')
  @UseInterceptors(FileInterceptorConfig('projects_files'))
  @Roles(UserRoles.ADMIN)
  async addProjectCarousel(
    @Param() { id }: FindOneParam,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.projectsService.updateProjectCarousel(id, file);
  }

  @Patch('/:id')
  @Roles(UserRoles.ADMIN)
  async updateProject(
    @Body() updatedProject: UpdateProjectDto,
    @Param() { id }: FindOneParam,
  ) {
    return this.projectsService.updateProject(id, updatedProject);
  }

  @Delete('/:id')
  @Roles(UserRoles.ADMIN)
  async deleteProject(@Param() { id }: FindOneParam) {
    return this.projectsService.deleteProject(id);
  }
}

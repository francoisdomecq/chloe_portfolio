import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectsService } from '../service/projects.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { FindOneParam } from '../types/find-one-param';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Public } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { UserRoles } from '../../users/types';

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

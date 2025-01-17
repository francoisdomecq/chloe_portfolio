import { ProjectsController } from './controller/projects.controller';
import { Module } from '@nestjs/common';
import { ProjectsService } from './service/projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './models/project.entity';
import { ProjectContent } from './models/project-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectContent])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}

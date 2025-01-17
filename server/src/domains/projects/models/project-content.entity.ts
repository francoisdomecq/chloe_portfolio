import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

enum ProjectContentMediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

@Entity()
export class ProjectContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { enum: ProjectContentMediaType })
  type: ProjectContentMediaType;

  @Column()
  source: string;

  @ManyToOne(() => Project, (project) => project.content, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  project: Project;
}

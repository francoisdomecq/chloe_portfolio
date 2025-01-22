import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectContent } from './project-content.entity';

interface ProjectDescription {
  title: string;
  subtitle: string[];
  content: string[];
  skills: string[];
  fonts: string;
  coworkers?: string[];
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  title: string;

  @Column('jsonb')
  description: ProjectDescription;

  @Column()
  date: string;

  @Column()
  carouselImage: string;

  @OneToMany(() => ProjectContent, (content) => content.project, {
    cascade: true,
    eager: true,
  })
  content: ProjectContent[];
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('text', { array: true })
  content: string[];
}

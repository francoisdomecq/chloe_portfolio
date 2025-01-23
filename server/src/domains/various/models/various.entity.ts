import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Various {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column({ default: '' })
  fileSrc: string;
}

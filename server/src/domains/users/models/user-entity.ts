import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from '../types';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true, enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;
}

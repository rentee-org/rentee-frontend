import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstname: string;

  @Column({ length: 100 })
  lastname: string;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100, default: 'renter' }) // renter, owner or admin
  role: string;

  @Column({ length: 100 })
  status: string;

  @Column({ length: 100 })
  phone: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  state: string;

  @Column({ length: 100 })
  country: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

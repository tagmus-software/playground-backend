import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column({ length: 255 })
  nome!: string;

  @Column({ length: 255 })
  email!: string;

  @Column({ length: 255 })
  password!: string;
}

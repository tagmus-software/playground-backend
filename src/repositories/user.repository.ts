import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column({ length: 255 })
  nome!: string;

  @Column({ type: 'text', unique:true })
  email!: string;

  @Column({ length: 255 })
  password!: string;
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
  id!: number

    @Column()
  Name!: string
  isUnique = true

    @Column()
  email!: string

    @Column()
  password!: string
 
   }

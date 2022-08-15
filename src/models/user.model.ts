import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    static find0ne({ argu0 }: { argu0: {}; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar', unique: true })
    email: string

    @Column({ type: 'varchar' })
    password: string




}


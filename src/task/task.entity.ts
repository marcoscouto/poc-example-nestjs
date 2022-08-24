import { randomUUID } from "crypto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task";

@Entity({
    name: 'tb_task'
})
export class TaskEntity {

    @PrimaryGeneratedColumn({
        name: 'id'
    })
    private id: number;

    @Column({
        name: 'code',
        length: 36,
        nullable: false,
        unique: true,
    })
    private code: string; 

    @Column({
        name: 'title',
        length: 100,
        nullable: false
    })
    private title: string;

    @Column({
        name: 'description',
        length: 255,
        nullable: false,
    })
    private description: string;

    @Column({
        name: 'date',
        nullable: false
    })
    private date: Date;

    constructor(title: string, description: string, date: Date){
        this.code = randomUUID()
        this.title = title;
        this.description = description;
        this.date = date;
    }

    toDomain(): Task {
        return new Task(this.title, this.description, this.date, this.code);
    }

}

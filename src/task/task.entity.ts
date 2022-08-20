import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
        nullable: false
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

    constructor(title, description){
        this.title = title;
        this.description = description;
        this.code = randomUUID()
        this.date = new Date();
    }

}

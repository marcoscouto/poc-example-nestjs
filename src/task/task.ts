import { TaskEntity } from "./task.entity";

export class Task {

    private code: string;
    private title: string;
    private description: string;
    private date: Date;

    constructor(title: string, description: string, date: Date, code?: string){
        this.title = title;
        this.description = description;
        this.date = date;
        this.code = code;
    }

    toEntity(): TaskEntity {
        return new TaskEntity(this.title, this.description, this.date);
    }

}

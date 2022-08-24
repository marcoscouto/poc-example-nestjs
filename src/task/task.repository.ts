import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { TaskEntity } from "./task.entity";

@Injectable()
export class TaskRepository extends Repository<TaskEntity> {

    constructor(private datasource: DataSource){
        super(TaskEntity, datasource.createEntityManager())
    }

}

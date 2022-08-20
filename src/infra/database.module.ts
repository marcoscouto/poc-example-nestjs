import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskEntity } from "src/task/task.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'tasks',
            entities: [
                TaskEntity
            ],
            synchronize: true,
            retryAttempts: 3,
            retryDelay: 3000,
            dropSchema: true
        })
    ],
    exports: [
        TypeOrmModule
    ]
})
export class DatabaseModule {}

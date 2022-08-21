import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    DatabaseModule, 
    TaskModule
  ]
})
export class AppModule {}

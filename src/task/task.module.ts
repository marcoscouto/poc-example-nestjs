import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';

@Module({
  providers: [
    TaskRepository,
    Repository
  ],
  controllers: [
    TaskController
  ]
})
export class TaskModule {}

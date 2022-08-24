import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task';
import { TaskRepository } from './task.repository';

@Controller('tasks')
export class TaskController {
  constructor(private repository: TaskRepository) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.repository.find();
    return tasks.map(task => task.toDomain());
  }

  @Post()
  async createTask(@Body() dto: any) {
    const { title, description, date} = dto;
    const task = new Task(title, description, date);
    return this.repository.save(task.toEntity());
  }

}

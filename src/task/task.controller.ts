import { Controller, Get } from '@nestjs/common';
import { Task } from './task';

@Controller()
export class TaskController {
  constructor() {}

  @Get('tasks')
  getAllTasks(): Task {
    const task = new Task("Task Title", "Task Description", new Date());
    return task;
  }

}

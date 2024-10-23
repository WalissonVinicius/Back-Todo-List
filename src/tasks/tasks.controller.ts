import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Omit<Task, 'id'>): Task {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Omit<Task, 'id'>): Task {
    return this.tasksService.update(Number(id), task);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.tasksService.delete(Number(id));
  }
}

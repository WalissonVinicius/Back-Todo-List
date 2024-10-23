import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: { title: string; about: string }): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: { title: string; about: string }): Promise<Task> {
    return this.tasksService.update(Number(id), task);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.tasksService.delete(Number(id));
  }
}

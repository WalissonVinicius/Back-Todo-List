import { Injectable } from '@nestjs/common';
import { Task } from './task.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  create(task: Omit<Task, 'id'>): Task {
    const newTask = { id: this.idCounter++, ...task };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updatedTask: Omit<Task, 'id'>): Task {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { id, ...updatedTask };
      return this.tasks[taskIndex];
    }
    return null;
  }

  delete(id: number): boolean {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }
}

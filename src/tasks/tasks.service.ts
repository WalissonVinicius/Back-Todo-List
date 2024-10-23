import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async create(data: { title: string; about: string }): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async update(id: number, data: { title: string; about: string }): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.prisma.task.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
}

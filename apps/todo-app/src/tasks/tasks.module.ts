import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema';
import { LoggerService } from '../utils/logger-service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema}])],
  providers: [TasksService, LoggerService],
  controllers: [TasksController]
})
export class TasksModule {}

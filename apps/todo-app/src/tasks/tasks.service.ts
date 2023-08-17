import { Injectable, Logger, Inject} from '@nestjs/common';
import { LoggerService } from '../utils/logger-service';
import { Task } from './schemas/task.schema';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDTO } from './dto/createTask.dto';
import {updateTaskDTO } from './dto/updateTask.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ParamIdDTO } from '../utils/request-params-dto';

@Injectable()
export class TasksService {
	private readonly logger = new Logger(TasksService.name);
	constructor(
		@InjectModel(Task.name) private taskModel: mongoose.Model<Task>,
		@Inject(LoggerService) private readonly fileLogger: LoggerService
	) {}
	
	async createTask(dto: createTaskDTO): Promise<Task> {
		const newTask = {
			id: uuidv4(),
			...dto,
			completed: false
		};
		try {
			var result =  this.taskModel.create(newTask);
			this.fileLogger.log(`GOD createTask: ${dto.title}`);
			return result
    } catch (e) {
      this.logger.error(e);
			this.fileLogger.error('Error createTask:', e);
    }
	}

	async getTasks(): Promise<Task[]> {
		try {
			var result = this.taskModel.find();
			this.fileLogger.log(`GOD getTasks`);
			return result
    } catch (e) {
      this.logger.error(e);
			this.fileLogger.error('Error getTasks:', e);
    }
	}

	async updateTask(id: ParamIdDTO, taskUpdates: updateTaskDTO): Promise<Task> {
		try {
			var result =  this.taskModel.findOneAndUpdate(id, taskUpdates);
			this.fileLogger.log(`GOD updateTask: ${id.id}`);
			return result
    } catch (e) {
      this.logger.error(e);
			this.fileLogger.error('Error updateTask:', e);
    }
	}
	
	async getTaskById(id: ParamIdDTO): Promise<Task> {
		try {
			var result =  this.taskModel.findOne(id);
			this.fileLogger.log(`GOD getTaskById: ${id.id}`);
			return result
    } catch (e) {
      this.logger.error(e);
			this.fileLogger.error('Error getTaskById:', e);
    }
	}

	async deleteTask(id: ParamIdDTO): Promise<Task> {
		try {
			const result = this.taskModel.findOneAndRemove(id);
			this.fileLogger.log(`GOD deleteTask: ${id.id}`);
			return result
    } catch (e) {
      this.logger.error(e);
			this.fileLogger.error('Error deleteTask:', e);
    }
	}
}

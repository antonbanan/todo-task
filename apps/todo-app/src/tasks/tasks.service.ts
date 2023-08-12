import { Injectable } from '@nestjs/common';
import { Task } from './schemas/task.schema';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDTO } from './dto/createTask.dto';
import {updateTaskDTO } from './dto/updateTask.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class TasksService {
	constructor(
		@InjectModel(Task.name)
		private taskModel: mongoose.Model<Task>
	) {}
	
	async createTask(dto): Promise<Task> {
		return this.taskModel.create({
			id: uuidv4(),
			...dto,
			completed: false
		});
	}

	async getTasks(): Promise<Task[]> {
		return this.taskModel.find();
	}

	async updateTask(id: string, taskUpdates: updateTaskDTO): Promise<Task> {
		console.log(taskUpdates)
		return this.taskModel.findOneAndUpdate({id}, taskUpdates);
	}
	
	async getTaskById(id: string): Promise<Task> {
		return this.taskModel.findOne({id});
	}

	async deleteTask(id: string): Promise<Task> {
		const result = this.taskModel.findOneAndRemove({id});
		return result
	}
}

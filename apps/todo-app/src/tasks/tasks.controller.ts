import { Body, Param, Controller, Post, Delete, Patch, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';
import { createTaskDTO } from './dto/createTask.dto';
import { updateTaskDTO } from './dto/updateTask.dto';


@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(
    private taskService: TasksService,
  ) {}

  @ApiOperation({ summary: 'Create Task' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  async create(
    @Body() taskDto: createTaskDTO,
  ) {
    return this.taskService.createTask(taskDto);
  }

  @ApiOperation({ summary: 'Delete Task' })
  @ApiResponse({ status: 200, type: Task })
  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  async delete(
    @Param('id') id: string,
  ): Promise<Task>  {
    return this.taskService.deleteTask(id);
  }

  @ApiOperation({ summary: 'get Task by id' })
  @ApiResponse({ status: 200, type: Task })
  @Get(':id')
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  async getTask(
    @Param('id') id: string,
  ): Promise<Task>  {
    return this.taskService.getTaskById(id);
  }

  @ApiOperation({ summary: 'Update Task' })
  @ApiResponse({ status: 200, type: Task })
  @Patch(':id') 
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  async update(
    @Param('id') id: string,
    @Body() task: updateTaskDTO,
  ): Promise<Task> {
    return this.taskService.updateTask(id, task);
  }



  @ApiOperation({ summary: 'Get all Tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }
}


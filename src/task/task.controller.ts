import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTask: TaskDto) {
    return this.taskService.createTask(createTask);
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() updateTask: TaskDto) {
    return this.taskService.updateTask(id, updateTask);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}

import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private readonly Click_up_base_url = 'https://api.clickup.com/api/v2';
  private readonly Click_Api_key =
    'pk_74461672_1M7EAPJ9SCI12T9ML5HB2Z5MQ1IEAL4H';
  private readonly list_id = '901505227024';
  private axios = axios.create({
    baseURL: this.Click_up_base_url,
    headers: {
      Authorization: this.Click_Api_key,
    },
  });

  // create task/issues
  async createTask(taskData: TaskDto) {
    try {
      const response = await this.axios.post(
        `list/${this.list_id}/task`,
        taskData,
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getTask(taskId: string) {
    try {
      const response = await this.axios.get(`task/${taskId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async updateTask(taskId: string, updateTaskData: TaskDto) {
    try {
      const response = await this.axios.put(`task/${taskId}`, updateTaskData);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  async deleteTask(taskId: string) {
    try {
      const response = await this.axios.delete(`task/${taskId}`);
      return {
        message: `task with id ${taskId} sucessfully deleted`,
      };
    } catch (e) {
      console.log(e);
    }
  }
}

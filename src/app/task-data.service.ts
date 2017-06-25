import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskDataService {

  lastId: number = 0;

  tasks: Task[] = [];

  constructor() { 

  }

  addTask(task: Task): TaskDataService {
  	if(!task.id) {
  		task.id = ++this.lastId;
  	}

  	this.tasks.push(task);

  	return this;
  }

  deleteTaskById(id: number): TaskDataService {
  	this.tasks = this.tasks
  	.filter(task => task.id !== id);

  	return this;
  }

  updateTaskById(id: number, values: Object = {}): Task {
  	let task = this.getTaskById(id);
  	if(!task) {
  		return null;
  	}

  	Object.assign(task, values);

  	return task;
  }

  getAllTasks(): Task[] {
  	return this.tasks;
  }

  getTaskById(id: number): Task {
  	return this.tasks
  	.filter(task => task.id === id).pop();
  }

  toggleTaskComplete(task: Task) {
  	let updatedTask = this.updateTaskById(task.id, {
  		status: !task.status
  	});

  	return updatedTask;
  }

}

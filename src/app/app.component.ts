import { Component } from '@angular/core';
import { Task } from './task';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/todomvc-app-css/index.css', '../../node_modules/todomvc-common/base.css'],
  providers: [TaskDataService]
})
export class AppComponent {
  
  newTask: Task = new Task();

  constructor(private taskDataService: TaskDataService) {

  }

  addTask() {
  	this.taskDataService.addTask(this.newTask);
  }

  toggleTaskComplete(task) {
  	this.taskDataService.toggleTaskComplete(task);
  }

  removeTask(task) {
  	this.taskDataService.deleteTaskById(task.id);
  }

  get tasks() {
  	return this.taskDataService.getAllTasks();
  }
}

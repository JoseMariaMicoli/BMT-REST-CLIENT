import { Component } from '@angular/core';
import { Task } from './task';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private taskDataService: TaskDataService) {

  }

  onAddTask(task: Task) {
  	this.taskDataService.addTask(task);
  }

  onToggleTaskComplete(task) {
  	this.taskDataService.toggleTaskComplete(task);
  }

  onRemoveTask(task) {
  	this.taskDataService.deleteTaskById(task.id);
  }

  get tasks() {
  	return this.taskDataService.getAllTasks();
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskDataService: TaskDataService) {

  }

  public ngOnInit() {
    this.taskDataService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onAddTask(task: Task) {
  	this.taskDataService.addTask(task).subscribe((newTask) => {
      this.tasks = this.tasks.concat(newTask);
    });
  }

  onToggleTaskComplete(task) {
  	this.taskDataService.toggleTaskComplete(task).subscribe((updatedTask) => {
      task = updatedTask;
    });
  }

  onRemoveTask(task) {
  	this.taskDataService.deleteTaskById(task.id).subscribe((_) => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  /*get tasks() {
  	return this.taskDataService.getAllTasks();
  }*/
}

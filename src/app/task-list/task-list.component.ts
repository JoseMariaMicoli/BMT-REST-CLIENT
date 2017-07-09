import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Task[];

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  onToggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task);
  }

  onRemoveTask(task: Task) {
    this.remove.emit(task);
  }

  ngOnInit() {
  }

}

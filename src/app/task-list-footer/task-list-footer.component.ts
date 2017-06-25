import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-footer',
  templateUrl: './task-list-footer.component.html',
  styleUrls: ['./task-list-footer.component.css']
})
export class TaskListFooterComponent implements OnInit {

  @Input()
  tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor() {
    console.log('TaskList constructor');
  }
}

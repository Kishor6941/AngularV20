import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { Todo } from '../../../../models/todo.model';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {
    @Input()
  taskList!: Signal<Todo[]>;
  @Output() deleteTask = new EventEmitter<Todo>();

editTask(task:Todo) {
  console.log('Task edited:', task);
  console.log(this.taskList())
  
}
deleteTaskById(task:Todo) {
  console.log(task,'Task deleted');
  // Implement deletion logic here  
  this.deleteTask.emit(task);
}
}

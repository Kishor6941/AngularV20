import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todolist } from './todolist/todolist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule,Todolist,CommonModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {
  taskName = signal<string>('');
  taskDescription = signal<string>('');
  taskList = signal<{ name: string; description: string }[]>([]);

  addTask() {
    const task = {
      name: this.taskName(),
      description: this.taskDescription(),
    };
    if (!task.name || !task.description) {
      console.error('Task name and description are required');
      return;
    }
    this.taskList.update((tasks) => [...tasks, task]);
    console.log('Task added:', this.taskList());

    this.taskName.set('');
    this.taskDescription.set('');
  }
}

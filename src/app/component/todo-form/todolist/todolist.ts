import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {
    @Input({ signal: true, required: true })
  Todolist!: Signal<{ name: string; description: string }[]>;
    

}

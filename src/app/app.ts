import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularV20';
}

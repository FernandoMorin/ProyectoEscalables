import { Component } from '@angular/core';
import { Navbar } from './core/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
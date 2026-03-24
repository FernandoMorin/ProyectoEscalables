import { Component } from '@angular/core';
import { Navbar } from '../../core/navbar/navbar';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
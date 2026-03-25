import { Component } from '@angular/core';
import { Navbar } from '../../core/navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
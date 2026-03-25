import { Component } from '@angular/core';
import { Navbar } from '../../core/navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Services } from './services/services';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Services],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}
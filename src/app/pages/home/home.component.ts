import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { HeroComponent } from '../../core/components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StyleClassModule, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}

import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}

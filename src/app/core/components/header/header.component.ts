import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StyleClassModule, PrimengModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { PrimengModule } from '../../../primeng/primeng.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimengModule, StyleClassModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}

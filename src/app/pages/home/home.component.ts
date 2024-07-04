import { Component, OnInit, inject } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { HeroComponent } from '../../core/components/hero/hero.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StyleClassModule, HeroComponent, PrimengModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private dataSvc = inject(DataService);
  public projects: any[] = [
    {
      id: 1,
      title: 'Doctors',
      mainImage: 'assets/porfolio-projects/example.png',
    },
  ];

  ngOnInit(): void {
    this.dataSvc.getData().subscribe((res) => {
      console.log(res);
      this.projects = res;
    });
  }
}

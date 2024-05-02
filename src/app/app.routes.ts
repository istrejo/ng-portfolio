import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    children: [],
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component'),
    children: [],
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component'),
    children: [],
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component'),
    children: [],
  },
];

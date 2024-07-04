import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  constructor() {}

  getData() {
    return this.http.get<any[]>('assets/projects.json');
  }
}

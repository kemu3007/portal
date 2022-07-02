import { Project } from './projects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('/assets/projects.json');
  }
}

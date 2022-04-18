import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from './tools';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>('/assets/tools.json');
  }
}

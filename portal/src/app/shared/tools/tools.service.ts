import { Tool } from './tools';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>('assets/tools.json');
  }
}

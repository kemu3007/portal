import { Snippet } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnippetService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Snippet[]>('/assets/snippets.json');
  }
}

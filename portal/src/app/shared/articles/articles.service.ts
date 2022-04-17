import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Comment } from './comments';
import { Article, ArticleDetail } from './articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<ArticleDetail> {
    return this.httpClient.get<ArticleDetail>(url);
  }

  getList(url: string): Observable<Record<string, Article>> {
    return this.httpClient.get<Record<string, Article>>(url);
  }

  getComments(url: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(url).pipe(catchError((_) => []));
  }
}

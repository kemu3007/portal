import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '@assets/articles/list.json';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { Article, Label } from '../models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('kemu tech blog');
  }

  get articles(): Record<string, Article> {
    return articles;
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get searchData() {
    const data: Record<string, string> = {};
    Object.keys(this.articles).forEach((key) => {
      const title = `${this.articles[key].title} | ${this.getLabels(this.articles[key])[0].name}`;
      data[title] = key;
    });
    return data;
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(Object.keys(this.articles).length / 3) : 1;
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$
      .pipe(debounceTime(200), distinctUntilChanged())
      .pipe(
        map((text) => Object.keys(this.searchData).filter((title) => title.toLowerCase().includes(text.toLowerCase())))
      );
  };

  selectArticle(event: NgbTypeaheadSelectItemEvent) {
    this.router.navigate(['/blog', this.searchData[event.item]]);
  }
}

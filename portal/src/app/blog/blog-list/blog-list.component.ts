import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '../../../../../articles/list.json';
import { Article, Label } from '../models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('kemu portal | blog');
  }

  get articles(): Record<string, Article> {
    return articles;
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  transitToDetail(id: string) {
    this.router.navigate(['/blog', id]);
  }
}

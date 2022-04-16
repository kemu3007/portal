import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '@assets/logs/list.json';
import { Log, Label } from '../models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './log-list.component.html',
})
export class LogListComponent {
  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('Kemu Log');
  }

  get articles(): Record<string, Log> {
    return articles;
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(Object.keys(this.articles).length / 3) || 1 : 1;
  }

  getLabels(article: Log): Label[] {
    return article.labels.filter((label) => label.name !== 'log');
  }
}

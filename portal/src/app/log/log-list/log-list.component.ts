import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article, Label } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent implements OnInit {
  articles: Record<string, Article> = {};

  constructor(titleService: Title, private articleService: ArticlesService) {
    titleService.setTitle('Kemu Log');
  }

  ngOnInit() {
    this.articleService.getList('/assets/logs/list.json').subscribe((articles) => (this.articles = articles));
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(Object.keys(this.articles).length / 3) || 1 : 1;
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'log');
  }
}

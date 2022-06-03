import { Component, OnInit } from '@angular/core';
import { Article, Label } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { LoadingService } from '@app/shared/loading/loading.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent implements OnInit {
  articles: Record<string, Article> = {};

  constructor(private articleService: ArticlesService, private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.loading = true;
    this.articleService.getList('/assets/logs/list.json').subscribe((articles) => {
      this.articles = articles;
      timer(100).subscribe((_) => (this.loadingService.loading = false));
    });
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

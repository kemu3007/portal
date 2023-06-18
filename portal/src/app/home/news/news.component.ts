import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private keyValuePipe: KeyValuePipe, private articlesService: ArticlesService, private router: Router) {}

  articles: Record<string, Article> = {};

  ngOnInit(): void {
    this.articlesService.getList('assets/articles/list.json').subscribe((articles) => (this.articles = articles));
  }

  get news() {
    return this.keyValuePipe.transform(Object.assign({}, this.articles)).sort((a, b) => Number(b.key) - Number(a.key));
  }

  navigateArticles(id: string) {
    if (Object.keys(this.articles).includes(id)) {
      this.router.navigate(['/blog/', id]);
    } else {
      this.router.navigate(['/log/', id]);
    }
  }
}

import { Article } from '../articles/articles';
import { ArticlesService } from '../articles/articles.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-newsbar',
  templateUrl: './newsbar.component.html',
  styleUrls: ['./newsbar.component.scss'],
})
export class NewsbarComponent implements OnInit {
  index = 0;
  articles: Record<string, Article> = {};

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService.getList('./assets/articles/list.json').subscribe((articles) => (this.articles = articles));
    interval(5000).subscribe((_) => (this.index += 1));
  }

  get news() {
    return this.newsList[this.index % this.newsList.length];
  }

  get newsList() {
    return [
      {
        type: 'warning',
        contents: 'このサイトは広告収益で成り立っています。広告ブロックツールは停止してください。',
      },
      {
        type: 'info',
        contents: '本ブログは組織としての見解ではなく、個人の見解を示すものとなっております。ご承知の上閲覧ください。',
      },
    ];
  }
}

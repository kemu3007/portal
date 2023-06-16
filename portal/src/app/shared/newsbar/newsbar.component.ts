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
    this.articlesService.getList('assets/articles/list.json').subscribe((articles) => (this.articles = articles));
    interval(5000).subscribe((_) => (this.index += 1));
  }

  get latestArticleId() {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1))[0] ?? '';
  }

  get latestArticleTitle() {
    return this.articles[this.latestArticleId]?.title ?? '';
  }

  get news() {
    return this.newsList[this.index % this.newsList.length];
  }

  get newsList() {
    return [
      {
        type: 'info',
        contents:
          "Google Newsで配信を受け取ることが可能です。<a href='https://news.google.com/publications/CAAqBwgKMJmRuAswpqzPAw?ceid=JP:ja&oc=3' target='_blank'>こちら</a>から",
      },
      {
        type: 'warning',
        contents: 'このサイトは広告収益で成り立っています。広告ブロックツールは停止してください。',
      },
      {
        type: 'info',
        contents: '本ブログは組織としての見解ではなく、個人の見解を示すものとなっております。ご承知の上閲覧ください。',
      },
      {
        type: 'info',
        contents: `新着記事通知: <a href='/blog/${this.latestArticleId}/'>${this.latestArticleTitle}</a>`,
      },
    ];
  }
}

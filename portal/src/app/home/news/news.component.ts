import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import articles from '@assets/articles/list.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  constructor(private keyValuePipe: KeyValuePipe) {}

  get articles() {
    return this.keyValuePipe.transform(articles).sort((a, b) => Number(b.key) - Number(a.key));
  }
}

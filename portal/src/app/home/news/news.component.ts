import { Component } from '@angular/core';
import articles from '@assets/articles/list.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  get articles() {
    return articles;
  }
}

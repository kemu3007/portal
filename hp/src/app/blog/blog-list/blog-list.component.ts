import { Component } from '@angular/core';
import articles from '../../../../../articles.json';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  get articles() {
    return articles
  }
}

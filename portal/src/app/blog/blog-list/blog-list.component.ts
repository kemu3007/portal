import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '../../../../../articles/list.json';
import { Article } from '../models';

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

  /** サブタイトルのため、markdown記法を削除する */
  escapeMD(body: string) {
    const target = /#|`|\n|\r/gi;
    return body.replaceAll(target, '');
  }

  transitToDetail(nodeId: string) {
    this.router.navigate(['/blog', nodeId]);
  }
}

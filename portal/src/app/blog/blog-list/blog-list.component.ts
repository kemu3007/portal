import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import articles from '@assets/articles/list.json';
import { Article, Label } from '../models';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent {
  constructor(titleService: Title, meta: Meta, private router: Router) {
    titleService.setTitle('kemu tech blog');
    meta.updateTag({ property: 'og:title', content: 'kemu tech blog' });
    meta.updateTag({
      property: 'og:image',
      content: 'https://portal.kemu.site/assets/images/blog.png',
    });
    meta.updateTag({ name: 'twitter:title', content: 'kemu tech blog' });
    meta.updateTag({
      name: 'twitter:image',
      content: 'https://portal.kemu.site/assets/images/blog.png',
    });
  }

  get articles(): Record<string, Article> {
    return articles;
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  transitToDetail(id: string) {
    this.router.navigate(['/blog', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Meta, Title } from '@angular/platform-browser';
import { ArticleDetail } from '../models';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  marked = marked;
  article?: ArticleDetail;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private meta: Meta
  ) {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-',
      gfm: true,
      breaks: true,
    });
  }

  ngOnInit(): void {
    this.article$.then((article) => {
      this.titleService.setTitle(`kemu tech blog | ${article.title}`);
      this.article = article;
      this.meta.updateTag({
        property: 'og:title',
        content: `kemu tech blog | ${article.title}`,
      });
      this.meta.updateTag({
        property: 'og:image',
        content: `https://portal.kemu.site/assets/images/${article.id}.png`,
      });
      this.meta.updateTag({
        name: 'twitter:title',
        content: `kemu tech blog | ${article.title}`,
      });
      this.meta.updateTag({
        name: 'twitter:image',
        content: `https://portal.kemu.site/assets/images/${article.id}.png`,
      });
    });
  }

  get article$(): Promise<ArticleDetail> {
    return import(
      `../../../assets/articles/${this.route.snapshot.paramMap.get('id')}.json`
    );
  }
}
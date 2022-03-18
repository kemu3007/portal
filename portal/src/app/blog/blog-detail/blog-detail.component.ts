import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Title } from '@angular/platform-browser';
import { ArticleDetail } from '../models';
import { MessageService } from '@app/shared/message/message.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  marked = marked;
  article?: ArticleDetail;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
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
    });
  }

  get article$(): Promise<ArticleDetail> {
    return import(`../../../assets/articles/${this.route.snapshot.paramMap.get('id')}.json`).catch((_) =>
      this.router.navigate(['/blog']).then((_) =>
        this.messageService.pushMessage({
          type: 'warning',
          body: '記事が存在していません',
        })
      )
    );
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import articles from '../../../../../articles.json';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  constructor(private titleService: Title, private route: ActivatedRoute) {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      gfm: true,
      breaks: true,
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`kemu portal | blog | ${this.article.title}`);
  }

  get article(): any {
    const nodeId: string = this.route.snapshot.paramMap.get('nodeId') ?? '';
    return (articles as Record<string, any>)[nodeId];
  }

  get body() {
    return marked.parse(this.article?.body ?? '');
  }

  get comments() {
    return this.article?.comments;
  }
}

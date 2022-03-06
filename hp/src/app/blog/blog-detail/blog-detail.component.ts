import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import articles from '../../../../../articles.json';
import { marked } from 'marked';
import hljs from 'highlight.js';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent {
  constructor(private route: ActivatedRoute) {
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

  get article() {
    const articleId = this.route.snapshot.params['nodeId'];
    return articles.find((article) => article.node_id === articleId);
  }

  get body() {
    return marked.parse(this.article?.body ?? '');
  }

  get comments() {
    return this.article?.comments;
  }
}

import { Injectable } from '@angular/core';
import hljs from 'highlight.js';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkedService {
  constructor() {
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

  get marked() {
    return marked;
  }
}

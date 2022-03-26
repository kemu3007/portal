import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked, Renderer } from 'marked';
import crypt from 'crypto-js';
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root',
})
export class MarkedService {
  marked = marked;

  constructor(private domSanitizer: DomSanitizer) {
    const renderer = new Renderer();
    renderer.heading = (text, lebel) => {
      const hash = crypt.MD5(text);
      return `
      <div class="d-flex">
        <h${lebel}
          id=${hash}
          style="border-left: solid 3px; border-color: darkturquoise; border-radius: 2px; padding-left: 5px;"
        >${text}</h${lebel}>
        <span class="btn btn-sm">
          <i class="bi bi-clipboard" onclick="window.navigator.clipboard.writeText('${window.location.origin}${window.location.pathname}#${hash}')"></i>
        </span>
      </div>
      `;
    };
    renderer.image = (href) => `<img src=${href} loading=lazy />`;
    renderer.link = (href, title, text) => `<a href=${href} class="text-muted">${text}</a>`;
    this.marked.setOptions({
      renderer,
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-',
      gfm: true,
      breaks: true,
    });
  }
}

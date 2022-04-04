import { Injectable } from '@angular/core';
import { marked, Renderer } from 'marked';
import crypt from 'crypto-es';
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root',
})
export class MarkedService {
  marked = marked;

  constructor() {
    const renderer = new Renderer();
    renderer.heading = (text, lebel) => {
      const hash = crypt.MD5(text);
      return `
      <div class="d-flex">
        <h${lebel}
          id=${hash}
          class="mb-0"
          style="
            border-left: solid 3px;
            border-color: darkturquoise;
            border-radius: 2px;
            padding-left: 5px;
          "
        >
          ${text}
          <button class="btn btn-sm bi bi-clipboard" onclick="window.navigator.clipboard.writeText('${window.location.origin}${window.location.pathname}#${hash}')"></button>
        </h${lebel}>
      </div>
      <hr class="mt-0" />
      `;
    };
    renderer.image = (href) => `<img src=${href} loading=lazy />`;
    renderer.link = (href, title, text) =>
      `<a href=${href} class="text-muted">${text}<i class="bi bi-link-45deg"></i></a>`;
    renderer.table = (header, body) => `<table class="table table-bordered table-striped">${header}${body}</table>`;
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
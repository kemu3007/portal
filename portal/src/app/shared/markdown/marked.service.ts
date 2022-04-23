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
    renderer.html = (html) => {
      html = html.replace('</summary>', `<i class="bi bi-file-earmark-code"></i></summary>`);
      html = html.replace('<img', '<img class="img-thumbnail img-fluid mb-1" loading="lazy"');
      return html;
    };
    renderer.heading = (text, lebel) => {
      const hash = crypt.MD5(text);
      return `
      <div class="d-flex mt-3 shadow-sm">
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
          <button title="アンカー付きリンクをコピー" class="btn btn-sm bi bi-clipboard" onclick="window.navigator.clipboard.writeText('${window.location.origin}${window.location.pathname}#${hash}')"></button>
        </h${lebel}>
      </div>
      <hr class="mt-0" />
      `;
    };
    renderer.link = (href, title, text) =>
      `<a href=${href} class="text-muted" title=${href}>${text}<i class="bi bi-link-45deg"></i></a>`;
    renderer.table = (header, body) => `<table class="table table-bordered table-striped">${header}${body}</table>`;
    this.marked.setOptions({
      renderer,
      langPrefix: 'prettyprint linenums language-',
      gfm: true,
      breaks: true,
    });
  }
}

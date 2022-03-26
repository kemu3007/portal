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
    renderer.heading = (text, lebel) => `<h${lebel} #${crypt.MD5(text)}>${text}</h${lebel}>`;
    renderer.image = (href) => `<img src=${href} loading=lazy />`;
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-btn',
  template: `
    <button class="btn btn-light border rounded-pill" (mouseover)="mouseOver()" (mouseout)="mouseOut()">
      <a id="btn" [href]="href" target="_blank"><i class="bi bi-twitter"></i>{{ btnText }}</a>
    </button>
  `,
})
export class TweetBtnComponent {
  btnText = '';

  get href() {
    const href = new URL('https://twitter.com/share');
    href.searchParams.set('url', this.url);
    href.searchParams.set('text', this.text);
    return href;
  }

  mouseOver() {
    this.btnText = 'Share This Page';
  }

  mouseOut() {
    this.btnText = '';
  }

  get url() {
    return window.location.origin + window.location.pathname + window.location.search;
  }

  get text() {
    return document.title;
  }
}

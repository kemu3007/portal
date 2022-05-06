import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tweet-btn',
  template: ` <div style="height: 30px;">
    <a id="btn" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" [attr.data-url]="url"
      >tweet</a
    >
  </div>`,
})
export class TweetBtnComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    const btn = document.getElementById('btn')!;
    btn.insertAdjacentElement('afterend', script);
  }

  get url() {
    return window.location.toString().replace('#/', '') + '/';
  }
}

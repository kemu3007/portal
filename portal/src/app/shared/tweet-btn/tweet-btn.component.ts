import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tweet-btn',
  template: `<a
    id="btn"
    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    class="twitter-share-button"
    data-show-count="false"
    >tweet</a
  >`,
})
export class TweetBtnComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    const btn = document.getElementById('btn')!;
    btn.insertAdjacentElement('afterend', script);
  }
}

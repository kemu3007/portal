import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent {
  constructor(meta: Meta) {
    meta.updateTag({ property: 'og:title', content: 'kemu portal | home' });
    meta.updateTag({
      property: 'og:image',
      content: 'https://portal.kemu.site/assets/images/home.png',
    });
    meta.updateTag({ name: 'twitter:title', content: 'kemu portal | home' });
    meta.updateTag({
      name: 'twitter:image',
      content: 'https://portal.kemu.site/assets/images/home.png',
    });
  }
}

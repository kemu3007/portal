import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrls: ['./lazy-img.component.scss'],
})
export class LazyImgComponent {
  @Input() src!: string;
  @Input() alt: string = 'no image';

  isLoaded = false;

  constructor() {}

  imgOnLoad() {
    this.isLoaded = true;
  }
}

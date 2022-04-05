import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
})
export class AdsComponent {
  @Input() type!: 'list' | 'box' | 'auto';
  @Input() count = 1;
  constructor() {}

  get displayType(): 'list' | 'box' {
    if (this.type !== 'auto') {
      return this.type;
    }
    return window.screen.width >= 768 ? 'list' : 'box';
  }

  get useGoogleAdsense() {
    return environment.adsenseProvider === 'google';
  }

  get isList() {
    return this.displayType === 'list';
  }
}

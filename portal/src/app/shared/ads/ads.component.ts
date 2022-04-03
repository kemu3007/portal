import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
})
export class AdsComponent {
  @Input() type!: 'list' | 'box';
  @Input() count = 1;
  constructor() {}

  get useGoogleAdsense() {
    return environment.adsenseProvider === 'google';
  }

  get isList() {
    return this.type === 'list';
  }
}

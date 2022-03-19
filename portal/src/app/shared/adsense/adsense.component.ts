import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-adsense',
  template: `<ng2-adsense
    *ngIf="isProd"
    [style]="style"
    [adFormat]="adFormat"
    [slot]="slot"
    [layoutKey]="layoutKey"
  ></ng2-adsense>`,
})
export class AdsenseComponent {
  @Input() style: string = '';
  @Input() adFormat: string = '';
  @Input() slot: string = '';
  @Input() layoutKey: string = '';

  get isProd() {
    return true;
  }
}

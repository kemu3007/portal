import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-amazon-ads',
  templateUrl: './amazon-ads.component.html',
})
export class AmazonAdsComponent implements OnInit {
  @Input() type!: 'box' | 'list';
  adsHTML: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.type === 'box') {
      const index = Math.floor(Math.random() * this.boxAds.length);
      this.adsHTML = this.sanitizer.bypassSecurityTrustHtml(this.boxAds[index]);
    } else {
      const index = Math.floor(Math.random() * this.listAds.length);
      this.adsHTML = this.sanitizer.bypassSecurityTrustHtml(this.listAds[index]);
    }
  }

  listAds = [
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=consumables&banner=1ERZ8HCNBSAXD1XXA9G2&f=ifr&linkID=1d12949329a4c4e4e920da9f0348a397&t=kemu03-22&tracking_id=kemu03-22" width="728" height="90" scrolling="yes" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=monthlydealevent&banner=0SN7PKM3ZXK5BW58WTR2&f=ifr&linkID=5358fc2d5755a9dedb119339861b27ae&t=kemu03-22&tracking_id=kemu03-22" width="728" height="90" scrolling="yes" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=gift_certificates&banner=06TTEXS1YFYS6PB0VKG2&f=ifr&linkID=6d23d5922409f70eed41d3b9a56c8be3&t=kemu03-22&tracking_id=kemu03-22" width="728" height="90" scrolling="yes" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=musicunlimited&banner=0QXT1F2BXNDSAZH0ZRG2&f=ifr&linkID=9badbcd001e3a2e9461a6906065b0b6d&t=kemu03-22&tracking_id=kemu03-22" width="728" height="90" scrolling="yes" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
  ];

  boxAds = [
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=consumables&banner=01FFPGM6WNKYF9VQMHR2&f=ifr&linkID=72cae5ab497aaa6831b25bf8e888970f&t=kemu03-22&tracking_id=kemu03-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=echoshow&banner=0XJZN9NN0NX85DW12AR2&f=ifr&linkID=9bd7741c680a480c3a4ca786201e21c4&t=kemu03-22&tracking_id=kemu03-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=amazonstudent&banner=1EXM3ZCBAGEJJSPD8ZG2&f=ifr&linkID=03d5fb50a5a050274c33cc2b26c4f368&t=kemu03-22&tracking_id=kemu03-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=gift_certificates&banner=1TJ8XM5YGJR5WC15P202&f=ifr&linkID=961f2d888bc0b8862660a4e2c28c078e&t=kemu03-22&tracking_id=kemu03-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
    `<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=musicunlimited&banner=0SHXYRCJP85NTD71G182&f=ifr&linkID=0b56f0f810c54916eb00997c29b485de&t=kemu03-22&tracking_id=kemu03-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>`,
  ];
}

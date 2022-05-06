import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { tap } from 'rxjs';
import { AdsModalService } from './shared/ads-modal/ads-modal.service';
import { LoadingService } from './shared/loading/loading.service';
import { MessageService } from './shared/message/message.service';
import { BreadcrumbService } from './shared/nav/breadcrumb.service';
import metaJson from '@assets/meta.json';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  adsCount = 0;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private adsModalService: AdsModalService,
    private loadingService: LoadingService,
    private title: Title,
    private meta: Meta
  ) {}

  watchNavigation() {
    return this.router.events.pipe(
      tap((event) => {
        if (event instanceof NavigationStart) {
          this.loadingService.loading = true;
          this.breadcrumbService.breadcrumb = event.url;
        } else if (event instanceof NavigationEnd) {
          this.loadingService.loading = false;
          this.displayOrWaitAds();
          if (window.location.hash.toString() in metaJson) {
            const meta = (metaJson as any)[window.location.hash.toString()];
            this.title.setTitle(meta.title);
            this.meta.updateTag({ name: 'description', content: meta.title });
            this.meta.updateTag({ property: 'og:description', content: meta.description });
            this.meta.updateTag({ name: 'twitter:title', content: meta.title });
            this.meta.updateTag({ name: 'twitter:description', content: meta.description });
          }
        } else if (event instanceof NavigationCancel || event instanceof NavigationError) {
          this.messageService.pushMessage({
            type: 'danger',
            body: `ページが見つかりませんでした。o(･ω･ = ･ω･)o '${event.url}'`,
          });
          this.router.navigate(['']);
        }
      })
    );
  }

  displayOrWaitAds() {
    if (this.adsCount === 3) {
      this.adsModalService.open();
      this.adsCount = 0;
    }
    this.adsCount += 1;
  }
}

import { AdsModalService } from './shared/ads-modal/ads-modal.service';
import { LoadingService } from './shared/loading/loading.service';
import { MessageService } from './shared/message/message.service';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import metaJson from '@assets/meta.json';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  adsCount = 0;

  constructor(
    private router: Router,
    private messageService: MessageService,
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
        } else if (event instanceof NavigationEnd) {
          this.loadingService.loading = false;
          this.displayOrWaitAds();
          const meta = (metaJson as any)[window.location.pathname];
          if (meta) {
            this.title.setTitle(meta.title);
            this.meta.updateTag({ name: 'description', content: meta.title });
            this.meta.updateTag({ property: 'og:description', content: meta.description });
            this.meta.updateTag({ name: 'twitter:description', content: meta.description });
            this.meta.updateTag({ property: 'og:title', content: meta.title });
            this.meta.updateTag({ name: 'twitter:title', content: meta.title });
            this.meta.updateTag({ property: 'og:image', content: meta.img });
            this.meta.updateTag({ name: 'twitter:image', content: meta.img });
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

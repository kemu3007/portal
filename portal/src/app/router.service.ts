import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { tap } from 'rxjs';
import { AdsModalService } from './shared/ads-modal/ads-modal.service';
import { LoadingService } from './shared/loading/loading.service';
import { MessageService } from './shared/message/message.service';
import { BreadcrumbService } from './shared/nav/breadcrumb.service';

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
    private loadingService: LoadingService
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

import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingService } from './shared/loading/loading.service';
import { BreadcrumbService } from './shared/nav/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];

  constructor(
    titleService: Title,
    router: Router,
    private loadingService: LoadingService,
    breadcrumbService: BreadcrumbService
  ) {
    titleService.setTitle('kemu portal');
    router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationStart) {
        loadingService.loading = true;
      } else if (event instanceof NavigationEnd) {
        loadingService.loading = false;
        breadcrumbService.breadcrumb = event.url;
      }
    });
    console.log('%c 👀 why are you seeing this console?', 'background: black; color: white;');
  }

  get loading() {
    return this.loadingService.loading;
  }
}

import { RouterService } from './router.service';
import { LoadingService } from './shared/loading/loading.service';
import { Component } from '@angular/core';
import version from '@assets/version.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
  ];
  adsCount = 0;

  constructor(private loadingService: LoadingService, routerService: RouterService) {
    routerService.watchNavigation().subscribe();
    console.log('%c 👀 why are you seeing this?', 'background: black; color: white;');
  }

  get loading() {
    return this.loadingService.loading;
  }

  get releaseDate() {
    return version['last-release'];
  }
}

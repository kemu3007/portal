import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from './shared/loading/loading.service';
import version from '@assets/version.json';
import { RouterService } from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];
  adsCount = 0;

  constructor(titleService: Title, private loadingService: LoadingService, routerService: RouterService) {
    titleService.setTitle('kemu portal');
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

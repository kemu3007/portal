import { ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  loading = false;

  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];

  constructor(titleService: Title, router: Router, changeDetectorRef: ChangeDetectorRef) {
    titleService.setTitle('kemu portal');
    router.events.pipe().subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
        changeDetectorRef.detectChanges();
      }
    });
    console.log('%c 👀 why are you seeing this console?', 'background: black; color: white;');
  }
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { PageState } from './shared/repositories/page.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  loading = false;
  state = new PageState();

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
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
        changeDetectorRef.detectChanges();
        window.scrollTo(0, this.state.location);
      }
    });
    window.onbeforeunload = () => this.ngOnDestroy();
    console.log('%c 👀 why are you seeing this console?', 'background: black; color: white;');
  }

  ngOnDestroy() {
    this.state.update('location', window.scrollY);
  }
}

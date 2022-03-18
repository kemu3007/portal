import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loading = false;

  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];

  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('kemu portal');
  }

  ngOnInit(): void {
    console.log('%c 👀 why are you seeing this console?', 'background: black; color: white;');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  isActive(to: string) {
    if (to !== '/') {
      return window.location.pathname.startsWith(to);
    }
    return to === window.location.pathname;
  }

  get activeTab() {
    const matched = this.tabs
      .map((tab, index) => {
        if (window.location.pathname.match(tab.name)?.length) {
          return index;
        }
        return null;
      })
      .filter(Boolean);
    return matched[0] || 0;
  }

  onClickedNav(collapse: NgbCollapse) {
    if (!collapse.collapsed) {
      collapse.toggle();
    }
  }
}

import { Component } from '@angular/core';
import count from '@assets/count.json';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog', count: count.blog },
    { name: 'tools', to: '/tools' },
    { name: 'snippets', to: '/snippets' },
  ];

  constructor() {}

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

import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
    { name: 'log', to: '/log' },
    { name: 'contact', to: '/contact' },
  ];

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

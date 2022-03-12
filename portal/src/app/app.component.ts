import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tabs = [
    { name: 'home', to: '/' },
    { name: 'blog', to: '/blog' },
  ];

  constructor(titleService: Title) {
    titleService.setTitle('kemu portal | home');
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
}

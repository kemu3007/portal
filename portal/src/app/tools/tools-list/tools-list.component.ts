import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import oldTools from '@assets/kemu-site.tools.json';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
})
export class ToolsListComponent {
  oldTools = oldTools;

  constructor(title: Title) {
    title.setTitle('kemu tools');
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(oldTools.length / 3) : 1;
  }
}

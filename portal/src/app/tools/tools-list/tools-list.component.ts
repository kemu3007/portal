import { Component, OnInit } from '@angular/core';
import oldTools from '../kemu-site.tools.json';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
})
export class ToolsListComponent {
  oldTools = oldTools;

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(oldTools.length / 3) : 1;
  }
}

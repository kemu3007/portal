import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Tool } from '../tools';
import tools from '../tools.json';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
})
export class ToolsListComponent {
  tools: Tool[] = tools;

  constructor(private router: Router, title: Title) {
    title.setTitle('kemu tools');
  }

  transitLink(tool: Tool) {
    if (tool.external) {
      window.location.href = tool.link;
    } else {
      this.router.navigate([tool.link]);
    }
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? Math.floor(tools.length / 3) : 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToolsService } from '@app/shared/tools/tools.service';
import { Tool } from '@app/shared/tools/tools';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
})
export class ToolsListComponent implements OnInit {
  tools: Tool[] = [];

  constructor(private router: Router, private toolsService: ToolsService, title: Title) {
    title.setTitle('Kemu Tools');
  }

  ngOnInit() {
    this.toolsService.get().subscribe((tools) => (this.tools = tools));
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
    return hasMd ? Math.floor(this.tools.length / 3) : 1;
  }
}

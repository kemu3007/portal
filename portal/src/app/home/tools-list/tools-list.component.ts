import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tool } from '@app/tools/tools';
import tools from '@app/tools/tools.json';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss'],
})
export class ToolsListComponent {
  tools = tools;

  constructor(private router: Router) {}

  transitTool(tool: Tool) {
    if (tool.external) {
      window.location.href = tool.link;
    } else {
      this.router.navigate([tool.link]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tool } from '@app/shared/tools/tools';
import { ToolsService } from '@app/shared/tools/tools.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss'],
})
export class ToolsListComponent implements OnInit {
  tools: Tool[] = [];

  constructor(private router: Router, private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.get().subscribe((tools) => (this.tools = tools));
  }

  transitTool(tool: Tool) {
    if (tool.external) {
      window.location.href = tool.link;
    } else {
      this.router.navigate([tool.link]);
    }
  }
}

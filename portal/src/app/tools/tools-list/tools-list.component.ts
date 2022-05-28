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
  pinned: string[] = ['GitHub Flavored Markdown Writer', 'Regex Checker', 'JSON Typer', 'Mermaid Live Editor'];

  constructor(private router: Router, private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.get().subscribe((tools) => (this.tools = tools));
  }

  get pinnedTools() {
    return this.tools.filter((tool) => this.pinned.includes(tool.label));
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

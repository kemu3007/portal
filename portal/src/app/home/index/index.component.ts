import { Component, OnInit } from '@angular/core';
import { Tool } from '@app/shared/tools/tools';
import { ToolsService } from '@app/shared/tools/tools.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  tools: Tool[] = [];

  constructor(private toolsService: ToolsService) {}

  ngOnInit(): void {
    this.toolsService.get().subscribe((tools) => (this.tools = tools));
  }
}

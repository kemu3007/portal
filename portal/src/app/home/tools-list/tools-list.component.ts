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
  _tools: Tool[] = [];

  constructor(private router: Router, private toolsService: ToolsService) {}

  ngOnInit() {
    this.toolsService.get().subscribe((tools) => (this._tools = tools));
  }

  get tools() {
    return this._tools.filter((tool) => !tool.external);
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
})
export class RealtimeComponent implements OnInit {
  datetime = '';
  ms = 0;

  constructor(title: Title, breadcrumbService: BreadcrumbService) {
    title.setTitle('REALTIME | kemu tools');
    breadcrumbService.breadcrumb = 'tools/REALTIME';
  }

  ngOnInit() {
    interval(100).subscribe((_) => {
      const now = new Date();
      this.datetime = now.toLocaleString();
      this.ms = now.getMilliseconds();
    });
  }
}

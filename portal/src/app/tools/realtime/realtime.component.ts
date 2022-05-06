import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
})
export class RealtimeComponent implements OnInit {
  datetime = '';
  ms = 0;

  constructor(breadcrumbService: BreadcrumbService) {
    breadcrumbService.breadcrumb = 'tools/REALTIME';
  }

  ngOnInit() {
    interval(100).subscribe((_) => {
      const now = new Date();
      this.datetime = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      this.ms = now.getMilliseconds();
    });
  }
}

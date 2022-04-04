import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
})
export class RealtimeComponent implements OnInit {
  datetime = '';
  ms = 0;

  constructor(title: Title) {
    title.setTitle('REALTIME | kemu tools');
  }

  ngOnInit() {
    interval(100).subscribe((_) => {
      const now = new Date();
      this.datetime = now.toLocaleString();
      this.ms = now.getMilliseconds();
    });
  }
}

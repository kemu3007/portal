import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
})
export class RealtimeComponent implements OnInit {
  date = '';
  time = '';

  constructor(title: Title) {
    title.setTitle('kemu tools | REALTIME');
  }

  ngOnInit() {
    interval(100).subscribe((_) => {
      const now = new Date();
      this.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
      this.time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;
    });
  }
}

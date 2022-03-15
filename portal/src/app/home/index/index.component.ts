import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(
    title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {
    title.setTitle('kemu portal | home');
  }

  ngOnInit(): void {
    const redirectTo = this.route.snapshot.queryParamMap.get('to');
    if (redirectTo) {
      this.router.navigate([redirectTo]);
    }
  }
}

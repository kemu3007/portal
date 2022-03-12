import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const redirectTo = this.route.snapshot.queryParamMap.get('to');
    if (redirectTo) {
      this.router.navigate([redirectTo]);
    }
  }
}

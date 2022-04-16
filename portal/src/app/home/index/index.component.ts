import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import tools from '@app/tools/tools.json';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  tools = tools;

  constructor(title: Title, private route: ActivatedRoute, private router: Router) {
    title.setTitle('Kemu Portal');
  }

  ngOnInit(): void {
    const redirectTo = this.route.snapshot.queryParamMap.get('to');
    if (redirectTo) {
      this.router.navigate([redirectTo], { fragment: this.route.snapshot.fragment ?? undefined });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetail } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss'],
})
export class LogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  html: SafeHtml = '';
  _article?: ArticleDetail;

  constructor(
    private route: ActivatedRoute,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer,
    private articlesService: ArticlesService
  ) {}

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
      this._article = article;
      this.html = this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(article.body));
      if (this.route.snapshot.fragment) {
        interval(100)
          .pipe(take(1))
          .subscribe((_) => {
            window.location.replace(
              `${window.location.origin}${window.location.pathname}#${this.route.snapshot.fragment}`
            );
          });
      }
    }
  }

  ngOnInit(): void {
    this.articlesService.get(`/assets/logs/${this.issueId}.json`).subscribe((article) => (this.article = article));
  }

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

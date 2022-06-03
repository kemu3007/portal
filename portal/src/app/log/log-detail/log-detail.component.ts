import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetail } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { LoadingService } from '@app/shared/loading/loading.service';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { timer } from 'rxjs';

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
    private articlesService: ArticlesService,
    private loadingService: LoadingService
  ) {}

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
      this._article = article;
      this.html = this.sanitizer.bypassSecurityTrustHtml(this.marked.parse(article.body));
    }
  }

  ngOnInit(): void {
    this.loadingService.loading = true;
    this.articlesService.get(`/assets/logs/${this.issueId}.json`).subscribe((article) => {
      this.article = article;
      timer(100).subscribe((_) => (this.loadingService.loading = false));
    });
  }

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

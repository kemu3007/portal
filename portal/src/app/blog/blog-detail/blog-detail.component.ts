import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { ArticleDetail } from '@app/shared/articles/articles';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { interval, take } from 'rxjs';
import { Comment } from '@app/shared/articles/comments';
import { ArticlesService } from '@app/shared/articles/articles.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  _article?: ArticleDetail;
  comments: Comment[] = [];
  html: SafeHtml = '';

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer,
    private articlesService: ArticlesService
  ) {}

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
      this.titleService.setTitle(`${article.title} | Kemu Tech Blog`);
      this._article = article;
      this.breadcrumbService.breadcrumb = `/blog/${article.title}`;
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

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.articlesService.get(`/assets/articles/${this.issueId}.json`).subscribe((article) => (this.article = article));
    this.articlesService
      .getComments(`/assets/comments/${this.issueId}.json`)
      .subscribe((comments) => (this.comments = comments));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleDetail } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { Comment } from '@app/shared/articles/comments';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  articles: Record<string, Article> = {};
  _article?: ArticleDetail;
  comments: Comment[] = [];
  html: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  get article() {
    return this._article;
  }

  set article(article: ArticleDetail | undefined) {
    if (article) {
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
    this.articlesService.getList('/assets/articles/list.json').subscribe((articles) => (this.articles = articles));
    this.articlesService.get(`/assets/articles/${this.issueId}.json`).subscribe((article) => (this.article = article));
    this.articlesService
      .getComments(`/assets/comments/${this.issueId}.json`)
      .subscribe((comments) => (this.comments = comments));
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }

  get articleIds(): string[] {
    return Object.keys(this.articles);
  }

  navigateByIssueId(issueId: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/blog/', issueId]);
  }

  get nextArticleId(): string | null {
    if (this.articleIds.length) {
      const nextIds = this.articleIds
        .map((issueId) => Number(issueId))
        .filter((issueId) => issueId > Number(this.issueId));
      if (nextIds.length) {
        return Math.min(...nextIds).toString();
      }
      return null;
    }
    return null;
  }

  get pastArticleId(): string | null {
    if (this.articleIds.length) {
      const pastIds = this.articleIds
        .map((issueId) => Number(issueId))
        .filter((issueId) => issueId < Number(this.issueId));
      if (pastIds.length) {
        return Math.max(...pastIds).toString();
      }
      return null;
    }
    return null;
  }
}

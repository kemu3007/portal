import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { LogDetail } from '../models';
import { MessageService } from '@app/shared/message/message.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { interval, take } from 'rxjs';
import { Comment } from '@app/shared/interfaces/comment';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.scss'],
})
export class LogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  html: SafeHtml = '';
  article?: LogDetail;
  comments: Comment[] = [];

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private markedService: MarkedService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.article$.then((article) => {
      this.titleService.setTitle(`kemu logs | ${article.title}`);
      this.article = article;
      this.breadcrumbService.breadcrumb = `/log/${article.title}`;
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
    });
    /** jsonのリストをimportした際、Moduleオブジェクトとして解釈され、Listのような構造を持っているがiterableでない型となるためその対応 */
    this.comments$.then((comments) => {
      for (let i = 0; i < comments.length; i++) {
        this.comments.push(comments[i]);
      }
    });
  }

  get issueId() {
    return this.route.snapshot.paramMap.get('id');
  }

  comments$: Promise<any[]> = import(`../../../assets/comments/${this.issueId}.json`).catch((_) => {});

  article$ = import(`../../../assets/logs/${this.issueId}.json`).catch((_) =>
    this.router.navigate(['/log']).then((_) =>
      this.messageService.pushMessage({
        type: 'warning',
        body: '記事が存在していません',
      })
    )
  );

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ArticleDetail } from '../models';
import { MessageService } from '@app/shared/message/message.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { MarkedService } from '@app/shared/markdown/marked.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  marked = this.markedService.marked;
  article?: ArticleDetail;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private markedService: MarkedService
  ) {}

  ngOnInit(): void {
    this.article$.then((article) => {
      this.titleService.setTitle(`kemu tech blog | ${article.title}`);
      this.article = article;
      this.breadcrumbService.breadcrumb = `/blog/${this.article.title}`;
    });
  }

  get article$(): Promise<ArticleDetail> {
    return import(`../../../assets/articles/${this.route.snapshot.paramMap.get('id')}.json`).catch((_) =>
      this.router.navigate(['/blog']).then((_) =>
        this.messageService.pushMessage({
          type: 'warning',
          body: '記事が存在していません',
        })
      )
    );
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}

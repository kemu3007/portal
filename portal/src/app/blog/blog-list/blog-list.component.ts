import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Label } from '@app/shared/articles/articles';
import { ArticlesService } from '@app/shared/articles/articles.service';
import { LoadingService } from '@app/shared/loading/loading.service';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction, timer } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
})
export class BlogListComponent implements OnInit {
  url = '/assets/articles/list.json';
  articles: Record<string, Article> = {};

  pageSize = 10;
  pageIndex = 0;

  constructor(
    private router: Router,
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {
    if (route.snapshot.data['lang'] !== 'ja') {
      this.url = `/assets/articles/${route.snapshot.data['lang']}/list.json`;
    }
  }

  ngOnInit() {
    this.loadingService.loading = true;
    this.articleService.getList(this.url).subscribe((articles) => {
      this.articles = articles;
      timer(100).subscribe((_) => (this.loadingService.loading = false));
    });
    const page = this.route.snapshot.queryParamMap.get('page');
    if (page) {
      this.pageIndex = Number(page);
    }
  }

  get isTranslated() {
    return this.route.snapshot.data['lang'] !== 'ja';
  }

  get langage() {
    return this.route.snapshot.data['lang'];
  }

  routeLangPage(lang: string) {
    if (lang === 'ja') {
      this.router.navigate(['/blog']);
    } else {
      this.router.navigate(['/blog', lang]);
    }
  }

  get articleKeys(): string[] {
    return Object.keys(this.articles).sort((a, b) => (a > b ? -1 : 1));
  }

  get searchData() {
    const data: Record<string, string> = {};
    Object.keys(this.articles).forEach((key) => {
      const title = `${this.articles[key].title} | ${this.getLabels(this.articles[key])[0].name}`;
      data[title] = key;
    });
    return data;
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 5 : 1;
  }

  getLabels(article: Article): Label[] {
    return article.labels.filter((label) => label.name !== 'article');
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    return text$
      .pipe(debounceTime(200), distinctUntilChanged())
      .pipe(
        map((text) => Object.keys(this.searchData).filter((title) => title.toLowerCase().includes(text.toLowerCase())))
      );
  };

  selectArticle(event: NgbTypeaheadSelectItemEvent) {
    this.router.navigate([this.searchData[event.item]]);
  }

  switchPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.router.navigate([], { queryParams: { page: this.pageIndex } });
  }

  get displayArticles() {
    const startIndex = this.pageIndex * this.pageSize;
    return this.articleKeys.slice(startIndex, startIndex + this.pageSize);
  }
}

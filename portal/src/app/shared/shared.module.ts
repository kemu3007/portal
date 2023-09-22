import { AdsModalComponent } from './ads-modal/ads-modal.component';
import { AdsComponent } from './ads/ads.component';
import { AmazonAdsComponent } from './amazon-ads/amazon-ads.component';
import { LazyImgComponent } from './lazy-img/lazy-img.component';
import { LoadingComponent } from './loading/loading.component';
import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';
import { NewsbarComponent } from './newsbar/newsbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MdescapePipe } from './pipes/mdescape.pipe';
import { YearPipe } from './pipes/year.pipe';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
// import { environment } from '@environments/environment';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

// import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    TweetBtnComponent,
    MessageComponent,
    LoadingComponent,
    NavComponent,
    AmazonAdsComponent,
    MdescapePipe,
    AdsComponent,
    AdsModalComponent,
    YearPipe,
    LazyImgComponent,
    NewsbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    // AdsenseModule.forRoot({ adClient: environment.googleAdClient }),
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbNavModule,
    MatRippleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  exports: [
    TweetBtnComponent,
    NgbModule,
    MessageComponent,
    LoadingComponent,
    // AdsenseModule,
    NavComponent,
    HttpClientModule,
    AmazonAdsComponent,
    ReactiveFormsModule,
    MdescapePipe,
    AdsComponent,
    AdsModalComponent,
    MatRippleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    YearPipe,
    MatPaginatorModule,
    LazyImgComponent,
    NewsbarComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}

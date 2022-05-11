import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { LoadingComponent } from './loading/loading.component';
import { AdsenseModule } from 'ng2-adsense';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { environment } from '@environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AmazonAdsComponent } from './amazon-ads/amazon-ads.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdescapePipe } from './pipes/mdescape.pipe';
import { AdsComponent } from './ads/ads.component';
import { AdsModalComponent } from './ads-modal/ads-modal.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { YearPipe } from './pipes/year.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LazyImgComponent } from './lazy-img/lazy-img.component';

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
    ProfileComponent,
    YearPipe,
    LazyImgComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdsenseModule.forRoot({ adClient: environment.googleAdClient }),
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
    AdsenseModule,
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
  ],
})
export class SharedModule {}

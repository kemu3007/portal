import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { AdsenseModule } from 'ng2-adsense';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [IndexComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    AdsenseModule.forRoot({ adClient: 'ca-pub-6219032039771696' }),
  ],
})
export class HomeModule {}

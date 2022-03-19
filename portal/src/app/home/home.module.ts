import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { AdsenseModule } from 'ng2-adsense';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [IndexComponent, ProfileComponent, ContactComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, RecaptchaModule],
})
export class HomeModule {}

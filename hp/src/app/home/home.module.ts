import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [IndexComponent, ProfileComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

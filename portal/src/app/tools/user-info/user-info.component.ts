import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';
import { UserInfoState } from './user-info.repository';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  data?: UserInfo;
  state = new UserInfoState();

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.get().subscribe((data) => {
      this.data = data;
      this.state.pushHistory(data);
    });
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 3 : 1;
  }
}

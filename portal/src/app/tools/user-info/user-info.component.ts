import { UserInfo } from './user-info';
import { UserInfoState } from './user-info.repository';
import { UserInfoService } from './user-info.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '@app/shared/message/message.service';
import { catchError, NEVER } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  data?: UserInfo;
  state = new UserInfoState();

  constructor(
    private userInfoService: UserInfoService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userInfoService
      .get()
      .pipe(
        catchError(() => {
          this.messageService.pushMessage({ type: 'danger', body: 'ユーザ情報の取得に失敗しました。maybe CORS 😉' });
          this.router.navigate(['/tools']);
          return NEVER;
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.state.pushHistory(data);
      });
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 3 : 1;
  }

  copyAddress(address: string) {
    window.navigator.clipboard.writeText(address);
    this.messageService.pushMessage({ type: 'info', body: `${address} をクリップボードにコピーしました` });
  }
}

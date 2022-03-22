import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>('https://api.kemu.site/checkUserInfo');
  }
}

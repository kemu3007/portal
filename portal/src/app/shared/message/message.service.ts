import { Injectable } from '@angular/core';
import { interval, take } from 'rxjs';

export interface AlertMessage {
  type: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  private _messages: AlertMessage[] = [];

  get messages() {
    return this._messages;
  }

  pushMessage(message: AlertMessage) {
    this._messages.push(message);
    interval(5000)
      .pipe(take(1))
      .subscribe((_) => this._messages.shift());
  }
}

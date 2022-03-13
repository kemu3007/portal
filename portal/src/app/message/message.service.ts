import { Injectable } from '@angular/core';

export interface AlertMessage {
  type: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messages: AlertMessage[] = [];
}

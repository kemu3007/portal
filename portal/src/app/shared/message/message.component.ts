import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  constructor(private messageService: MessageService) {}

  get messages() {
    return this.messageService.messages;
  }
}

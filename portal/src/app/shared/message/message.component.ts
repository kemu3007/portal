import { MessageService } from './message.service';
import { Component } from '@angular/core';

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

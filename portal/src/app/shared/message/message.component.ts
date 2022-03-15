import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    interval(5000).subscribe((_) => this.messageService.messages.shift());
  }

  get messages() {
    return this.messageService.messages;
  }
}

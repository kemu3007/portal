import { Component, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from '@app/shared/message/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(private modalService: NgbModal, private messageService: MessageService, title: Title) {
    title.setTitle('Contact | Kemu Portal');
  }

  isShowed = false;

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  resolveReCaptcha() {
    this.isShowed = true;
  }
}

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
    this.modalService.open(content, { centered: true });
  }

  resolveReCaptcha() {
    this.isShowed = true;
  }

  copyAddress() {
    navigator.clipboard
      .writeText('kemu430113+portal@gmail.com')
      .then(() =>
        this.messageService.pushMessage({ type: 'info', body: 'copied email address to your clipboard (*ゝω・)ﾉ' })
      )
      .catch(() => this.messageService.pushMessage({ type: 'danger', body: "we can't access your clipboard (◇´Д｀ﾟ" }))
      .finally(() => this.modalService.dismissAll());
  }
}

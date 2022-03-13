import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}

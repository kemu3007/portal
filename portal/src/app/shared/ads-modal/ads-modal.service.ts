import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class AdsModalService {
  modal?: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  open() {
    if (localStorage.getItem('mode') !== 'dev') {
      this.modalService.open(this.modal, { size: 'lg', centered: true, backdrop: 'static' });
    }
  }

  close() {
    this.modalService.dismissAll();
  }
}

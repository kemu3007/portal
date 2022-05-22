import { AdsModalService } from './ads-modal.service';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ads-modal',
  templateUrl: './ads-modal.component.html',
})
export class AdsModalComponent implements AfterViewInit {
  @ViewChild('content') modal?: TemplateRef<any>;
  constructor(private adsModalService: AdsModalService) {}

  ngAfterViewInit() {
    this.adsModalService.modal = this.modal;
  }

  close() {
    this.adsModalService.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from '@app/shared/message/message.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss'],
})
export class Base64Component implements OnInit {
  form = new FormGroup({
    rawData: new FormControl(''),
    base64Data: new FormControl(''),
  });

  constructor(title: Title, breadCrumbService: BreadcrumbService, private messageService: MessageService) {
    title.setTitle('Base64 Encoder/Decoder | kemu tools');
    breadCrumbService.breadcrumb = '/tools/Base64 Encoder/Decoder';
  }

  ngOnInit() {
    persistControl(this.form, 'base64', {}).subscribe();
  }

  copy(text: string) {
    window.navigator.clipboard.writeText(text);
    this.messageService.pushMessage({ type: 'info', body: '変換後のデータをクリップボードにコピーしました。' });
  }

  get encodedData(): string {
    try {
      return btoa(this.form.controls.rawData.value);
    } catch (_) {
      try {
        return btoa(encodeURIComponent(this.form.controls.rawData.value));
      } catch (err: any) {
        return err.toString();
      }
    }
  }

  get decodedData(): string {
    try {
      return atob(this.form.controls.base64Data.value);
    } catch (err: any) {
      return err.toString();
    }
  }

  get decodeMultiByte(): string {
    try {
      return decodeURIComponent(atob(this.form.controls.base64Data.value));
    } catch (err: any) {
      return err.toString();
    }
  }
}

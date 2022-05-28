import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MessageService } from '@app/shared/message/message.service';
import { FormGroup, FormControl, persistControl } from '@ngneat/reactive-forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  form = new FormGroup({
    space: new FormControl('  ', Validators.required),
    json: new FormControl('', Validators.required),
  });
  result: any = '';

  ngOnInit() {
    persistControl(this.form, 'json-formatter', {}).subscribe();
    this.form.value$.pipe(distinctUntilChanged()).subscribe((_) => this.submit());
  }

  submit() {
    try {
      if (this.form.valid) {
        const json = JSON.parse(this.form.controls.json.value);
        this.result = JSON.stringify(json, null, this.form.controls.space.value);
      }
    } catch (err) {
      this.result = err;
    }
  }

  copy() {
    window.navigator.clipboard.writeText(this.result);
    this.messageService.pushMessage({ type: 'info', body: '整形後のデータをクリップボードにコピーしました。' });
  }

  get jsonBytes() {
    return new TextEncoder().encode(this.result).length;
  }
}

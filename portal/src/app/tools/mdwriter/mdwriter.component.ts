import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { MessageService } from '@app/shared/message/message.service';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-mdwriter',
  templateUrl: './mdwriter.component.html',
})
export class MdwriterComponent implements OnInit {
  form = new FormGroup({
    markdown: new FormControl(''),
  });

  constructor(
    private markedService: MarkedService,
    private domSanitizer: DomSanitizer,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    persistControl(this.form, 'mdwriter', {}).subscribe();
  }

  get rawHTML() {
    return this.markedService.marked.parse(this.form.controls.markdown.value);
  }

  get generatedHTML() {
    return this.domSanitizer.bypassSecurityTrustHtml(
      this.markedService.marked.parse(this.form.controls.markdown.value)
    );
  }

  copy(text: string) {
    window.navigator.clipboard.writeText(text);
    this.messageService.pushMessage({ type: 'info', body: 'クリップボードにコピーしました。' });
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.form.controls.markdown.patchValue(this.form.controls.markdown.value + '  ');
    }
  }
}

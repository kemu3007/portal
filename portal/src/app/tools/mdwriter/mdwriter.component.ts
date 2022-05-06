import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkedService } from '@app/shared/markdown/marked.service';
import { MessageService } from '@app/shared/message/message.service';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    breadcrumbService: BreadcrumbService,
    private markedService: MarkedService,
    private domSanitizer: DomSanitizer,
    private messageService: MessageService,
    private modal: NgbModal
  ) {
    breadcrumbService.breadcrumb = 'tools/GitHub Flavored Markdown Writer';
  }

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

  handleKeyDown(event: KeyboardEvent, mdInput: HTMLTextAreaElement) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const defaultLocation = mdInput.selectionStart;
      const left = this.form.controls.markdown.value.slice(0, mdInput.selectionStart);
      const right = this.form.controls.markdown.value.slice(mdInput.selectionStart);
      this.form.controls.markdown.setValue(left + '\t' + right);
      mdInput.selectionEnd = defaultLocation + 1;
    }
  }

  open(content: TemplateRef<any>) {
    this.modal.open(content, { centered: true, size: 'fullscreen' });
  }

  close() {
    this.modal.dismissAll();
  }
}

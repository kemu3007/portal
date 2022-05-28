import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from '@app/shared/message/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@ngneat/reactive-forms';
import { persistControl } from '@ngneat/reactive-forms';
import mermaid from 'mermaid';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-mermaid',
  templateUrl: './mermaid.component.html',
})
export class MermaidComponent implements OnInit, AfterViewInit {
  @ViewChild('mermaid') mermaidDiv!: ElementRef<HTMLDivElement>;

  form = new FormGroup({
    mermaid: new FormControl(''),
  });

  constructor(private messageService: MessageService, private modal: NgbModal, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    persistControl(this.form, 'mermaid', {}).subscribe();
  }

  ngAfterViewInit() {
    this.form.value$.subscribe((value) => this.drawMermaid(value.mermaid));
  }

  copy(text: string) {
    window.navigator.clipboard.writeText(text);
    this.messageService.pushMessage({ type: 'info', body: 'クリップボードにコピーしました。' });
  }

  handleKeyDown(event: KeyboardEvent, mdInput: HTMLTextAreaElement) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const defaultLocation = mdInput.selectionStart;
      const left = this.form.controls.mermaid.value.slice(0, mdInput.selectionStart);
      const right = this.form.controls.mermaid.value.slice(mdInput.selectionStart);
      this.form.controls.mermaid.setValue(left + '\t' + right);
      mdInput.selectionEnd = defaultLocation + 1;
    }
  }

  drawMermaid(text: string) {
    this.mermaidDiv.nativeElement.removeAttribute('data-processed');
    this.mermaidDiv.nativeElement.innerHTML = text;
    mermaid.init('#mermaid');
  }

  open(content: TemplateRef<any>) {
    this.modal.open(content, { centered: true, size: 'fullscreen' });
  }

  close() {
    this.modal.dismissAll();
  }

  showFS(content: any) {
    this.modal.open(content, { centered: true, size: 'fullscreen' });
  }

  get mermaidSVG() {
    return this.sanitizer.bypassSecurityTrustHtml(this.mermaidDiv.nativeElement.innerHTML);
  }
}

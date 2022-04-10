import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';
import swaggerUI from 'swagger-ui';
import jsYaml from 'js-yaml';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';

@Component({
  selector: 'app-openapi',
  templateUrl: './openapi.component.html',
})
export class OpenapiComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    isYaml: new FormControl(true),
    openapi: new FormControl(''),
  });

  error: string = '';
  redocEnabled = false;
  spec = {};

  constructor(private modalService: NgbModal, title: Title, breadcrumbService: BreadcrumbService) {
    title.setTitle('OpenApi Viewer | kemu tools');
    breadcrumbService.breadcrumb = 'tools/OpenApi Viewer';
  }

  ngOnInit(): void {
    persistControl(this.form, 'openapi', {}).subscribe();
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.id = 'redocScript';
    script.src = 'https://cdn.jsdelivr.net/npm/redoc@latest/bundles/redoc.standalone.js';
    const redoc = document.getElementById('viewer')!;
    redoc.insertAdjacentElement('afterend', script);
  }

  insertRedocScript() {
    const script = document.createElement('script');
    script.text = `Redoc.init(${JSON.stringify(this.spec)}, document.getElementById('redoc'))`;
    document.getElementById('redocScript')!.insertAdjacentElement('afterend', script);
  }

  open(content: TemplateRef<any>) {
    try {
      this.spec = this.form.value.isYaml ? jsYaml.load(this.form.value.openapi) : JSON.parse(this.form.value.openapi);
      this.modalService.open(content, { centered: true, size: 'fullscreen' });
      swaggerUI({ dom_id: '#swagger', spec: this.spec, tryItOutEnabled: false, supportedSubmitMethods: [] });
      this.error = '';
    } catch (err: any) {
      this.error = err.toString();
    }
  }

  openRedoc(content: TemplateRef<any>) {
    try {
      this.spec = this.form.value.isYaml ? jsYaml.load(this.form.value.openapi) : JSON.parse(this.form.value.openapi);
      this.modalService.open(content, { centered: true, size: 'fullscreen' });
      this.insertRedocScript();
      this.error = '';
    } catch (err: any) {
      this.error = err.toString();
    }
  }

  close() {
    this.modalService.dismissAll();
  }
}

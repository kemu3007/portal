import { Component, OnInit, TemplateRef } from '@angular/core';
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
export class OpenapiComponent implements OnInit {
  form = new FormGroup({
    isYaml: new FormControl(true),
    openapi: new FormControl(''),
  });

  error: string = '';

  constructor(private modalService: NgbModal, title: Title, breadcrumbService: BreadcrumbService) {
    title.setTitle('OpenApi Viewer | kemu tools');
    breadcrumbService.breadcrumb = 'tools/OpenApi Viewer';
  }

  ngOnInit(): void {
    persistControl(this.form, 'openapi', {}).subscribe();
  }

  open(content: TemplateRef<any>) {
    try {
      const spec = this.form.value.isYaml ? jsYaml.load(this.form.value.openapi) : JSON.parse(this.form.value.openapi);
      this.modalService.open(content, { centered: true, size: 'fullscreen' });
      swaggerUI({ dom_id: '#swagger', spec, tryItOutEnabled: false, supportedSubmitMethods: [] });
    } catch (err: any) {
      this.error = err.toString();
    }
  }

  close() {
    this.modalService.dismissAll();
  }
}

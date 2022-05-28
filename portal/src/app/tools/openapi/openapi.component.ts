import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';
import jsYaml from 'js-yaml';

@Component({
  selector: 'app-openapi',
  templateUrl: './openapi.component.html',
  styleUrls: ['./openapi.component.scss'],
})
export class OpenapiComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    isYaml: new FormControl(true),
    openapi: new FormControl(''),
  });

  error: string = '';
  redocEnabled = false;
  spec = {};

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    persistControl(this.form, 'openapi', {}).subscribe();
  }

  ngAfterViewInit(): void {
    const redoc = document.createElement('script');
    redoc.src = 'https://cdn.jsdelivr.net/npm/redoc@latest/bundles/redoc.standalone.js';
    redoc.id = 'redoc-script';
    const viewer = document.getElementById('viewer')!;
    viewer.insertAdjacentElement('afterend', redoc);

    const swagger = document.createElement('script');
    swagger.src = 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js';
    swagger.id = 'swagger-script';
    viewer.insertAdjacentElement('afterend', swagger);
  }

  insertRedocScript() {
    const script = document.createElement('script');
    script.text = `Redoc.init(${JSON.stringify(this.spec)}, document.getElementById('redoc'))`;
    document.getElementById('redoc-script')!.insertAdjacentElement('afterend', script);
  }

  insertSwaggerScript() {
    const script = document.createElement('script');
    script.text = `SwaggerUIBundle({spec: ${JSON.stringify(
      this.spec
    )}, dom_id: '#swagger', tryItOutEnabled: false, supportedSubmitMethods: []});`;
    document.getElementById('swagger-script')!.insertAdjacentElement('afterend', script);
  }

  open(content: TemplateRef<any>) {
    try {
      this.spec = this.form.value.isYaml ? jsYaml.load(this.form.value.openapi) : JSON.parse(this.form.value.openapi);
      this.modalService.open(content, { centered: true, size: 'fullscreen' });
      this.insertSwaggerScript();
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

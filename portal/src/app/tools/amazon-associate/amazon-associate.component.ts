import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-amazon-associate',
  templateUrl: './amazon-associate.component.html',
})
export class AmazonAssociateComponent implements OnInit {
  form = new FormGroup({
    associateId: new FormControl('kemu03-22', Validators.required),
    product: new FormControl('', [Validators.required]),
  });
  result = '';
  constructor(title: Title) {
    title.setTitle('kemu tools | Amazon Associate Linker');
  }

  ngOnInit() {
    persistControl(this.form, 'associate', {}).subscribe();
    if (this.form.valid) {
      this.generate();
    }
  }

  useDefault() {
    this.form.controls.associateId.patchValue('kemu03-22');
  }

  copy(text: string) {
    window.navigator.clipboard.writeText(text);
  }

  generate() {
    const productURL = new URL(this.form.controls.product.value);
    this.result = `${productURL.origin}${productURL.pathname}?tag=${this.form.controls.associateId.value}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from '@app/shared/nav/breadcrumb.service';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
})
export class RegexComponent implements OnInit {
  form = new FormGroup({
    regex: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });

  matches: RegExpMatchArray[] = [];

  constructor(title: Title, breadcrumbService: BreadcrumbService) {
    title.setTitle('Regex Checker | Kemu Tools');
    breadcrumbService.breadcrumb = 'tools/Regex Checker';
  }

  ngOnInit(): void {
    persistControl(this.form, 'regex', {}).subscribe();
    this.form.value$.subscribe(() => this.evaluate());
  }

  evaluate() {
    if (this.form.valid) {
      const regex = new RegExp(this.form.value.regex, 'g');
      this.matches = Array.from(this.form.value.text.matchAll(regex)) ?? [];
    }
  }
}

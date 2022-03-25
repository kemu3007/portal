import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-json-typer',
  templateUrl: './json-typer.component.html',
})
export class JsonTyperComponent implements OnInit {
  constructor(title: Title) {
    title.setTitle('kemu portal | JSON Typer');
  }
  results: string[] = [];
  form = new FormGroup({
    json: new FormControl('', Validators.required),
    rootType: new FormControl('Root', Validators.required),
    space: new FormControl(String.raw`\t`, Validators.required),
  });

  ngOnInit() {
    persistControl(this.form, 'jsonTyper', {}).subscribe();
    if (this.form.valid) {
      this.submit();
    }
  }

  submit() {
    this.results = [];
    let spaceValue = this.form.controls.space.value;
    if (spaceValue === String.raw`\t`) {
      spaceValue = '\t';
    }
    this.typer(JSON.parse(this.form.controls.json.value), this.form.controls.rootType.value, spaceValue);
  }

  typer(dict: Record<string, any>, clsName = 'Root', space = '\t') {
    let result = `interface ${clsName} {\n`;
    Object.keys(dict).forEach((key) => {
      let typeName: string = typeof dict[key];
      let keyName = key;
      if (typeof dict[key] === 'object') {
        if (Array.isArray(dict[key])) {
          typeName = 'any[]';
        } else {
          typeName = key.charAt(0).toUpperCase() + key.slice(1);
          typeName = typeName.replaceAll('-', '');
          this.typer(dict[key], typeName, space);
        }
      }
      if (key.includes('-')) {
        keyName = `['${key}']`;
      }
      result += `${space}${keyName}: ${typeName};\n`;
    });
    result += `}\n`;
    this.results.push(result);
  }

  copy() {
    window.navigator.clipboard.writeText(this.resultText);
  }

  get resultText() {
    return [...this.results].reverse().join('\n');
  }
}

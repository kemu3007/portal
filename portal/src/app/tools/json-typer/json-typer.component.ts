import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MessageService } from '@app/shared/message/message.service';
import { FormGroup, FormControl, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-json-typer',
  templateUrl: './json-typer.component.html',
})
export class JsonTyperComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  results: string[] = [];
  error: any;
  form = new FormGroup({
    json: new FormControl('', Validators.required),
    rootType: new FormControl('Root', Validators.required),
    space: new FormControl(String.raw`\t`, Validators.required),
  });
  escapeString = /\-|\+/g;

  ngOnInit() {
    persistControl(this.form, 'jsonTyper', {}).subscribe();
    if (this.form.valid) {
      this.submit();
    }
  }

  submit() {
    this.results = [];
    this.error = null;
    let spaceValue = this.form.controls.space.value;
    if (spaceValue === String.raw`\t`) {
      spaceValue = '\t';
    }
    try {
      this.typer(JSON.parse(this.form.controls.json.value), this.form.controls.rootType.value, spaceValue);
    } catch (error) {
      this.error = error;
    }
  }

  typer(dict: Record<string, any>, clsName = 'Root', space = '\t') {
    let result = `interface ${clsName} {\n`;
    Object.keys(dict).forEach((key) => {
      let typeName: string = typeof dict[key];
      let keyName = key;
      if (typeof dict[key] === 'object') {
        if (Array.isArray(dict[key])) {
          typeName = 'any[]';
        } else if (dict[key] === null) {
          typeName = 'null';
        } else {
          typeName = key.charAt(0).toUpperCase() + key.slice(1);
          typeName = typeName.replaceAll('-', '');
          this.typer(dict[key], typeName, space);
        }
      }
      if (key.match(this.escapeString)) {
        keyName = `['${key}']`;
      }
      result += `${space}${keyName}: ${typeName};\n`;
    });
    result += `}\n`;
    this.results.push(result);
  }

  copy() {
    window.navigator.clipboard.writeText(this.resultText);
    this.messageService.pushMessage({ type: 'info', body: '型情報をコピーしました。' });
  }

  get resultText() {
    return [...this.results].reverse().join('\n');
  }
}

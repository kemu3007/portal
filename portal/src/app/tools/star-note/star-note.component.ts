import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-star-note',
  templateUrl: './star-note.component.html',
  styleUrls: ['./star-note.component.scss'],
})
export class StarNoteComponent implements OnInit {
  forms = new FormGroup({
    notes: new FormArray([this.getForm()]),
  });

  getForm() {
    return new FormGroup({
      situation: new FormControl(''),
      task: new FormControl(''),
      action: new FormControl(''),
      result: new FormControl(''),
    });
  }

  constructor() {}

  ngOnInit(): void {
    persistControl(this.forms, 'start-note', {
      arrControlFactory: {
        notes: (value) => {
          const form = this.getForm();
          form.patchValue(value);
          return form;
        },
      },
    }).subscribe();
  }

  addForm() {
    this.forms.controls.notes.push(this.getForm());
  }

  deleteForm() {
    if (this.forms.controls.notes.length !== 1) {
      this.forms.controls.notes.controls = this.forms.controls.notes.controls.filter((controls) =>
        Object.values(controls.value).some((value) => value)
      );
    }
  }
}

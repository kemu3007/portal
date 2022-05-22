import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-year-check',
  templateUrl: './year-check.component.html',
})
export class YearCheckComponent implements OnInit {
  form = new FormGroup({
    birthday: new FormControl('2000-01-01'),
    highschoolRyunen: new FormControl(0),
    collegeEnterRonin: new FormControl(0),
    collegeRyunen: new FormControl(0),
    shushokuRonin: new FormControl(0),
  });

  constructor() {}

  ngOnInit() {
    persistControl(this.form, 'year-check', {}).subscribe();
  }

  get birthday() {
    return new Date(this.form.value.birthday);
  }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();
    if (
      today.getMonth() < this.birthday.getMonth() ||
      (today.getMonth() === this.birthday.getMonth() && today.getDate() > this.birthday.getDate())
    ) {
      age -= 1;
    }
    return age;
  }

  get nendo() {
    if (this.birthday.getMonth() + 1 < 4) {
      return this.birthday.getFullYear() - 1;
    }
    return this.birthday.getFullYear();
  }

  get highschoolSotugyou() {
    return this.nendo + 19 + this.form.value.highschoolRyunen;
  }

  get collegeEnter() {
    return this.highschoolSotugyou + this.form.value.collegeEnterRonin;
  }

  get collegeSotugyou() {
    return this.collegeEnter + 4 + this.form.value.collegeRyunen;
  }

  get companyEnter() {
    return this.collegeSotugyou + this.form.value.shushokuRonin;
  }
}

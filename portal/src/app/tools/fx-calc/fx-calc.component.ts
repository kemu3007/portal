import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, persistControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'app-fx-calc',
  templateUrl: './fx-calc.component.html',
})
export class FxCalcComponent implements OnInit {
  form = new FormGroup({
    lot: new FormControl(100000),
    leverage: new FormControl(500),
    lossCut: new FormControl(20),
    money: new FormControl(100000),
    rate: new FormControl(130),
    lotAmount: new FormControl(1),
  });

  ngOnInit(): void {
    persistControl(this.form, 'fx-calc', {}).subscribe();
  }

  constructor() {}

  get lotPrice() {
    return this.form.value.lot * this.form.value.rate;
  }

  get depositAmount() {
    return (this.lotPrice * this.form.value.lotAmount) / this.form.value.leverage;
  }

  get depositRate() {
    return (this.form.value.money / this.depositAmount) * 100;
  }

  get lossCutDiff() {
    return (
      (this.depositAmount * ((100 - this.form.value.lossCut) / 100)) / this.form.value.lot / this.form.value.lotAmount
    );
  }

  get lossCutMin() {
    return this.form.value.rate - this.lossCutDiff;
  }
  get lossCutMax() {
    return this.form.value.rate + this.lossCutDiff;
  }

  get maxLot() {
    return (this.form.value.money * this.form.value.leverage) / this.lotPrice;
  }

  get maxLotPrice() {
    return this.maxLot * this.lotPrice;
  }
}

import { Injectable } from '@angular/core';
import { interval, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  _loading = false;

  set loading(value: boolean) {
    if (value) {
      this._loading = value;
    } else {
      interval(500)
        .pipe(take(1))
        .subscribe((_) => (this._loading = value));
    }
  }

  get loading(): boolean {
    return this._loading;
  }
}

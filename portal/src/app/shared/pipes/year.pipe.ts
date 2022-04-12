import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year',
})
export class YearPipe implements PipeTransform {
  transform(year: number, ...args: unknown[]): string {
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: 'long', year: 'numeric' }).format(
      new Date(year, 1, 1)
    );
  }
}

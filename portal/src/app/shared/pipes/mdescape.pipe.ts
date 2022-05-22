import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdescape',
})
export class MdescapePipe implements PipeTransform {
  removeSeed = ['\n', '\r', '\t', ' ', '[', ']', '-', /(http.*)/g, /(<img.*)/g];

  transform(text: string, ..._: unknown[]): string {
    this.removeSeed.forEach((seed) => (text = text.replaceAll(seed, '')));
    return text + '...';
  }
}

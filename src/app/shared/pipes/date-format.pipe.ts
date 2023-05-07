import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    console.log(value);
    let tzOffset = (value).getTimezoneOffset() * 60000;
    let date = new Date(Date.now() - tzOffset);
    return date.toISOString().slice(0, 16).replace('T', ' ');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTime',
})
export class DataTimePipe implements PipeTransform {
  transform(value: Date | string | null): unknown {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    date.setTime(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000 + 3 * 60 * 60 * 1000
    );
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return `${date.toLocaleDateString('ru-RU', options).replace(',', '')}`;
  }
}

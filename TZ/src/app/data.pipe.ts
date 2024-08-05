import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataRus',
})
export class DataPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    date.setTime(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000 + 3 * 60 * 60 * 1000
    );

    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}

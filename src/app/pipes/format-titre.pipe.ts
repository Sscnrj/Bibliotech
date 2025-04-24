import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitre',
  standalone: true
})
export class FormatTitrePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const clean = value.replace(/_/g, ' ');
    const words = clean.split(' ');
    const first = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    const rest = words.slice(1).map(w => w.toLowerCase());
    return [first, ...rest].join(' ');
  }
}

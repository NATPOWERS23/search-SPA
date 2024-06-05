import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string): unknown {
    if (!args) return value;
    const re = new RegExp(args, 'igm');
    value = value.replace(re, '<span class="highlighted-text">$&</span>');
    return value;
  }
}

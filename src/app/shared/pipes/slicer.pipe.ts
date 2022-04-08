import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicer',
})
export class SlicerPipe implements PipeTransform {
  transform(text: string = '', maxLength: number): any {

    return text.length > maxLength
      ? (`${text.slice(0, maxLength)}...`)
      : text;
  }
}

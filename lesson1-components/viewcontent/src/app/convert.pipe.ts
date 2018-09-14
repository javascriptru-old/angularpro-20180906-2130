import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  pure: false
})
export class ConvertPipe implements PipeTransform {

  constructor() {

  }

  transform(value: any, args?: any): any {
    console.log('ConvertPipe');
    return value;
  }

}
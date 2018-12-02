import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      const valuesArray = value.split('');
      valuesArray.reverse();
      return valuesArray.join('');
    }
    return value;
  }

}

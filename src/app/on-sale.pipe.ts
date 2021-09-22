import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale'
})
export class OnSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    //onsole.log("my value "+ value);
    if(value){
      return 'This is sale';
    }
    return '';
  }

}

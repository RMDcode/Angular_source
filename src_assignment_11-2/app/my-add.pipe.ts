import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, addition:number): number 
  {
    addition=value+addition;

    return addition;
  }

}

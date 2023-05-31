import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number,multi:number): Number 
  {
    multi=value*multi;

    return multi;
  }

}

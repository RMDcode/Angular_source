import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{


  public Addition(A:number,B:number):Number
  {    
    let C:number=0;
    
    return C=A+B;
  }

  public Subtraction(A:number,B:number):Number
  { 
    let D:number=0;

    return D=A-B;
  }

  constructor() { }
}

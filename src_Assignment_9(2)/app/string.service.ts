import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  public CountCapital(s:any):Number
  { 
    let count : number=0;

    for(let i in s)
    {
      if(s.charAt(i)===s.charAt(i).toUpperCase())
      {
        count++;
        
      }
    }


    return count;
  }


  constructor() { }
}

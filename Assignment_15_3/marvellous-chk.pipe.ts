import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

transform(value: number,...args:any):any
{
    if(value%2==0)
    {
      return "This number is even";
    }
    else if(value%2!==0)
    {
      return "This number is odd";
    }
    else if(value==0||value==1)
    {
      let i:number=0;
      let p:number=1;
      
      for(i=2;i<=value/2;++i)
      {
        if(value%i==0)
        {
          p=1;
          break;
        }
        if(p==0)
        {
          return "This number is prime";
        }
        else
        {
          return "This number is not prime";
        }
      }
    }
    let t:number=0;
    for(let i=1;i<=value/2;i++)
    {

      {
        if(value%i==0)
        {
          t +=i;
        }
      }
      if(t===value && t!==0)
      {
        return "It is a perfect number";
      }
      else
      {
        return "It is not a perfect number";
      }
    }
  
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{

  transform(value: number, param:any,...args:any):any
  {
    if(param=="prime") 
    {
      return this.funcPrime(value) ? 'It is a Prime':'It is Not Prime';
    }
    else if(param=="perfect") 
    {
    return this.funcPerfect(value) ? 'It is Perfect':'It is Not Perfect';
    }
     else if(param=="even") 
    {
     return value%2==0 ? 'It is Even':'It is Odd';
    } 
    else if(param=="odd") 
    {
      return value%2!==0 ? 'It is Odd':'It is Even';
    }
  }

  public funcPrime(num:any):any 
  {
    if (num<=1) 
    {
      return false;
    }
  for (let i=2;i<=Math.sqrt(num); i++) 
    {
      if (num%i==0) 
      {
        return false;
      }
    }
  return true;
  }

  public funcPerfect(num:any):any 
  {
    let sum = 0;
    for (let i=1;i<num;i++) 
    {
      if (num%i==0) 
      {
        sum+=i;
      }
    }
    return sum==num;
  }
}

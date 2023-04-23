import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  public ChkPrime (No : number): String
  {
    let i:number=0;
    let p:number=0;

    if(No==0||No==1)
    {
      p=1;
    }

    for(i=2;i<=No/2;++i)
    {
      if(No%i==0)
      {
          p=1;
          break;
      }
    }

  if(p==0)
    {
      return "This number is Prime:"+No;
    }
    else
    {
      return "This number is not prime:"+No;
    }

  
  }
}

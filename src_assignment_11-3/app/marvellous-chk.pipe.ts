import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:any,...args:any):String
  {
    if(param[0]=="prime")
    { 
      let i:number=0;
      let p:number=0;
      if(value==0||value==1)
      {
        p=1;
      }
      for(i=2;i<=value/2;++i)
      {
        if(value%i==0)
        {
          p=1;
          break;
        }
        if(p==0)
        { console.log("code travelle here");
          return "This number is prime";
        }
        else
        {console.log("code travelle here");
          return "This number is not prime";
        }
      }
    }
    if(param[0]=="perfect")
    {
      let t:number=0;
      for(let i=1;i<=value/2;i++)
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
    if(param[0]=="even")
    {
      if(value%2==0)
      {
        return "this number is even";
      }
      else
      {
        return "this number is odd";
      }
    }
    if(param[0]=="odd")
    {
      if(value%2!==0)
      {
        return "this number is odd";
      }
      else
      {
        return "this number is even";
      }
    }
  return param;    
  }

}

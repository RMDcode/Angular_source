export function Summation(Arr : any[]) : any
  {
      let sum:any=0;
      let cnt:any=0;
  
      for (cnt = 0; cnt < Arr.length; cnt++) 
      {
          sum = sum + Arr[cnt];
      }
      return sum;
  }

export function CountCapital(s:any):any
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

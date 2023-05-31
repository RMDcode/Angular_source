export function CheckPassword(pass:any):any
{

    var capitalword =/^.*[A-Z]{2}$/m;
    var smallword =/^.*[a-z]{3}$/m;
    var digits=/^.*[0-9]{2}$/m;
    var special=/^.*[~!@#$%^*\-_=+[{\]}\/;:,.?]{1}$/m;

    if(pass.includes(capitalword))
    {
        if(pass.includes(smallword))
        {
            if(pass.includes(digits))
            {
                if(pass.includes(special))
                {
                    return "password is valid";
                }
            }
        }
    }
    else
    {
        return "password is invalid."
    }

}
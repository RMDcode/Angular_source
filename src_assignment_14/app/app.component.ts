import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    constructor(public fobj:FormBuilder)
    {
      
    }
    wordPattern= /^[a-zA-Z]+$/;
    numPattern= /^[0-9]+$/;
    emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    CustomerForm = this.fobj.group
    (
      {
        firstname :['',Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)])],
        lastname :['', Validators.compose([Validators.required,Validators.pattern(this.wordPattern)]) ],
        email :['',Validators.compose([ Validators.required,Validators.pattern(this.emailRegExp) ])],
        phone :['',Validators.compose([ Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.numPattern) ])],
        address :['', Validators.compose([ Validators.required, Validators.pattern(this.wordPattern)]) ],
        city :['', Validators.compose([ Validators.required, Validators.maxLength(4),Validators.pattern(this.wordPattern) ]) ],
        state :['', Validators.compose([Validators.required,,Validators.pattern(this.wordPattern)]) ],
        zipcode :['', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6),Validators.pattern(this.numPattern)]) ],
        Comment :['', Validators.compose([ Validators.required, Validators.minLength(30),Validators.maxLength(30),Validators.pattern(this.wordPattern) ]) ],
      }
    );
  
}

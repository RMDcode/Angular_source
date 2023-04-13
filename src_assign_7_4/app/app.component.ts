import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{ 
  public call1="";
  public call2="";
  
  public fun1()
  {
    this.call1="marvellous infosystems";

  }

  public fun2()
  {
    this.call2="marvellous infosystems";

  }

}

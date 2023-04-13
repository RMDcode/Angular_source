import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{ 
  public call="Marvellous Infosystems";
  
  public fun()
  {
    this.call="Educating for Better tomorrow";

  }

}

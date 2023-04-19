import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public Str : String ="";


  public Read(a:any)
  {
    this.Str=a;
  }
   
  
}

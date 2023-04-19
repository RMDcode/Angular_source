import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{

@Output() public Myevent = new EventEmitter();

public str : string="";

  public Message(words:any)
  {
    this.str=words;
    this.Myevent.emit(words);
  }
  

}

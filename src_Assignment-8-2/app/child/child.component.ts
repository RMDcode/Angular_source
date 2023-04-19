import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{ 
  @Input() public MessageFromParent="";

  @Output() public Myevent=new EventEmitter();

  public SendMessage()
  {
    this.Myevent.emit("Hello Parent Component");
  }

}

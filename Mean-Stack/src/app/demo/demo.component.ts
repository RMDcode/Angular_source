import { Component,Output,OnInit,EventEmitter } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  public message : any=[];

  constructor(private service : MarvellousService){}


  ngOnInit()
  {
    return this.service.getBatches().subscribe(data=>this.message =data);
  }
  
}

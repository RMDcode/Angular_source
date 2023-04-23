import { Component,OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{

//public x: number=10;
//public y: number=21;
public Service: any = [];
public Service1:any = [];

constructor(public aobj : ArithmeticService){}

ngOnInit()
{

  this.Service = this.aobj.Addition(10,20);
  this.Service1 = this.aobj.Subtraction(10,21);

}


}

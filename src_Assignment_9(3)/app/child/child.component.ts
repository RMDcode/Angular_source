import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  public count:any=[];
  public prime:any=[];
  constructor(public cobj:NumberService,public sobj:StringService){}


  
  ngOnInit()
  { 
    this.prime=this.cobj.ChkPrime(2);
    this.count=this.sobj.CountCapital("ROhiT");
  }
  
}

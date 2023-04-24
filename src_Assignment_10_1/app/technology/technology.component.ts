import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent 
{
  public technology=[
    {"name":"Angular"},
    {"name":"Node.Js"},
    {"name":"Android"},
    {"name":"Big Data"},
    {"name":"Artifical Intelligence"}
  ];

}

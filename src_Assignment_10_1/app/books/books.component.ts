import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent 
{
  public books=[
    {"name":"IOT Disruptions"},
    {"name":"The Slient Intelligence"},
    {"name":"Access Denied"},
    {"name":"The Second Machine Age"},
    {"name":"Think and grow rich"}
  ];


}

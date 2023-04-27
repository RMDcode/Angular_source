import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public yobj:ElementRef,public renderer:Renderer2) { }

  @HostListener('window:keydown.enter',['$event'])handleKeyDown(event:KeyboardEvent)
  { 
    
    this.yobj.nativeElement.style.background="yellow";
    
    

    this.yobj.nativeElement.style.fontWeight='bold';
  }

 // @HostBinding('mouseenter')onmouseenter()
  //{
   // this.renderer.setStyle(this.yobj.nativeElement,'border-radius','100px')
 // }
  
 //@HostListener('window:keydown.enter',['$event'])handleKeyUp(event:KeyboardEvent)
  //{
   // this.yobj.nativeElement.style.background="";
 // }

  

}

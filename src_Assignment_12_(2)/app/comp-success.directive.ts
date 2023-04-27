import { asNativeElements, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public gobj: ElementRef) {}

  @HostListener('mouseenter')Onmouseenter()
  {
    this.gobj.nativeElement.style.color="green";
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.gobj.nativeElement.style.color="black";
  }

}

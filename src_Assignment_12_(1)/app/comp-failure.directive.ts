import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public robj: ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.robj.nativeElement.style.color="red";
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.robj.nativeElement.style.color="black";
  }

}

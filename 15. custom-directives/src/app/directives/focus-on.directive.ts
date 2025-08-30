import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocusOn]',
})
export class FocusOnDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}

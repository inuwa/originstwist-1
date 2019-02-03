import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeClass]'
})
export class ChangeClassDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.addClass('responsive');
  }
  public addClass(className: string) {
    this.renderer.addClass(this.el.nativeElement, className);
  }
}

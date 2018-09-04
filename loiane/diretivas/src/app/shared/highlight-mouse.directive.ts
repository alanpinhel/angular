import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    // código extra
    return this.backgroundColor;
  }

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
  ) { }

}

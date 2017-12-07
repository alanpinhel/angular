import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    this._renderer
      .setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );
  }
}

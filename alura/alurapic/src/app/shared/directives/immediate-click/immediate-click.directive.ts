import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[apImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit() {
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.element.nativeElement.click();
    }
  }
}

import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFocus]'
})
export class NinDirective {
  placeholder: any;

  constructor(private renderer: Renderer, private ref: ElementRef) {
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target) {
    this.placeholder = target.placeholder;
    target.placeholder = '';
  }

  @HostListener('focusout', ['$event.target'])
  onFocusOut(target) {
    target.placeholder = this.placeholder;
  }

  @HostListener('keyup') onKeyUp() {
    this.ref.nativeElement.value = this.ref.nativeElement.value.toUpperCase();
  }

}
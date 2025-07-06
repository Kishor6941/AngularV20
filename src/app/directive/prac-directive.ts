import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appPracDirective]'
})
export class PracDirective {

el = inject(ElementRef);

@HostListener('blur')
OnBlur() {
  const value = this.el.nativeElement.value;
  if (value) {
    this.el.nativeElement.value = value.trim();
  }
}
}

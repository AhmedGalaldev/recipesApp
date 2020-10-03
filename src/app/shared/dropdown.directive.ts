import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') show = false;

  constructor(private _el: ElementRef) {}
  @HostListener('click') onClick() {
    if (this.show == false) {
      this._el.nativeElement
        .querySelector('.dropdown-menu')
        .classList.add('show');
      this.show = !this.show;
    } else if (this.show == true) {
      this.show = !this.show;
      this._el.nativeElement
        .querySelector('.dropdown-menu')
        .classList.remove('show');
    }
  }
}

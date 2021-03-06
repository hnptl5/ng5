import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isopen = false;

  @HostListener('click') toggleopen() {
    this.isopen = !this.isopen;
  }
}

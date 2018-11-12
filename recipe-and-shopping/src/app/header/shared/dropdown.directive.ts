import { Directive, HostBinding, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: Boolean = false;
  @Input('ngClass') ngClass: string = 'open';

  constructor() {

  }

  @HostListener('click') toggleOpen(eventData: Event){
    this.isOpen = !this.isOpen;
  }

}

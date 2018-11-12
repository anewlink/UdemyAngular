import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    //elementRef.nativeElement
  }

  ngOnInit() {
    //Prefered to not modify DOM directly. Avoid this
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

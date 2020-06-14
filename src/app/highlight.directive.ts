import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  ngAfterViewInit(){
    console.log('appHighlight');
    console.log('Elem ref', this.element);
  }

}

import { EventEmitter } from '@angular/core';
import {  Directive, ElementRef, Input, Output} from '@angular/core';
import  Thaana from './thaana'

@Directive({
  selector: '[ng-thaana]',
})
export class NgThaanaDirective {

  @Output('ng-thaana') ngThaana = new EventEmitter<string>();

  constructor(el: ElementRef) {
    el.nativeElement.style.direction = 'rtl'

    Thaana(el.nativeElement, (e: any) => {
        this.ngThaana.emit(e)
    })
    
 }

}

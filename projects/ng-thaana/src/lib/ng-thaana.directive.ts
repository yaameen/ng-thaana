import { AfterViewInit, EventEmitter } from '@angular/core';
import {  Directive, ElementRef, Input, Output} from '@angular/core';

import  Thaana from 'dhivehi'


export type Flavor = 'phonetic' | 'typewriter' | 'faseyha'

@Directive({
  selector: '[ng-thaana]',
  standalone: false
})
export class NgThaanaDirective implements AfterViewInit {

  @Input('flavor') flavor: Flavor = 'phonetic';
  @Output('ng-thaana') ngThaana = new EventEmitter<string>();
  @Output('thaana-toggled') thaanaToggled = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.direction = 'rtl'
    this.el.nativeElement.addEventListener('thaana-toggled', (e: CustomEvent) => {
      this.thaanaToggled.emit(e.detail)
    })
    Thaana(this.el.nativeElement, { flavor: this.flavor })
  }

}

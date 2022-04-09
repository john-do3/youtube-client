import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCardStyleDirective]',
})
export class CardStyleDirective implements OnInit {
  @Input() date!: string;

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    // If a publication date is less than a month, set border background to green
    // If a publication date is less than 7 days, set border background to blue
    // If a publication date is more than 6 months, set border background to red
    // yellow for dates between 1 and 6
    let color = 'gray';

    const monthsElapsed = moment().diff(moment(this.date), 'months');
    if (monthsElapsed > 6) { color = 'red'; } else if (monthsElapsed > 1) { color = 'yellow'; } else {
      color = 'green';
      const daysElapsed = moment().diff(moment(this.date), 'days');
      if (daysElapsed < 7) color = 'blue';
    }

    this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', `5px solid ${color}`);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() data!: ISearchItem;

  constructor() { }

  ngOnInit(): void {
  }

  getCardStyle(): any {
    // If a publication date is less than a month, set border background to green
    // If a publication date is less than 7 days, set border background to blue
    // If a publication date is more than 6 months, set border background to red
    let color = 'red';
    // let cardDate = new Date(this.data.snippet.publishedAt);
    const monthsElapsed = moment().diff(moment(this.data.snippet.publishedAt), 'months');
    if (monthsElapsed < 1) {
      color = 'green';
      const daysElapsed = moment().diff(moment(this.data.snippet.publishedAt), 'days');
      if (daysElapsed < 7) color = 'blue';
    }

    return { 'border-bottom': `5px solid ${color}` };
  }
}

import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { ISearchItem } from '../../models/search-item.model';

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
    let color = 'gray';

    const monthsElapsed = moment().diff(moment(this.data.snippet.publishedAt), 'months');
    if (monthsElapsed > 6) { color = 'red'; } else if (monthsElapsed > 1) { color = 'yellow'; } else {
      color = 'green';
      const daysElapsed = moment().diff(moment(this.data.snippet.publishedAt), 'days');
      if (daysElapsed < 7) color = 'blue';
    }

    return { 'border-bottom': `5px solid ${color}` };
  }
}

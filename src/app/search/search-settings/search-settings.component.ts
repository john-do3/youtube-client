import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, OnChanges } from '@angular/core';
import { IFilter } from 'src/app/models/filter.model';
import { ISortModel } from 'src/app/models/sort.model';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent implements OnInit {
  // sort types for date and views / is ascending
  dateTitle: string = 'date';
  viewsTitle: string = 'count of views';
  filterCriteria!: string;

  sortTypes: Record<string, boolean> = {
    'date': false,
    'views': false,
  };

  @Output()
  sortClicked: EventEmitter<ISortModel> = new EventEmitter<ISortModel>();

  @Output()
  filterClicked: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let cc = changes['filterStr'].currentValue;
    console.log(cc);
  }

  onSort(sortType: string): void {
    let currentDirection = !this.sortTypes[sortType];
    this.dateTitle = 'date';
    this.viewsTitle = 'count of views';

    let directionSign = currentDirection ? '▲' : '▼';

    if (sortType == 'date')
      this.dateTitle = `${this.dateTitle} ${directionSign}`;
    else
      this.viewsTitle = `${this.dateTitle} ${directionSign}`;

    this.sortClicked.emit({ type: sortType, isAscending: currentDirection });

    // swap current direction asc/desc
    this.sortTypes[sortType] = currentDirection;
  }

  onFilter(): void {
    this.filterClicked.emit({ title: this.filterCriteria });
  }

}


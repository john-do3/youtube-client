import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { IFilter } from 'src/app/core/models/filter.model';
import { ISortModel } from '../../../youtube/models/sort.model';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  // sort types for date and views / is ascending
  dateTitle: string = 'date';

  viewsTitle: string = 'count of views';

  filterCriteria!: string;

  sortTypes: Record<string, boolean> = {
    date: false,
    views: false,
  };

  constructor(private headerService: HeaderService) { 

  }

  onSort(sortType: string): void {
    const currentDirection = !this.sortTypes[sortType];
    this.dateTitle = 'date';
    this.viewsTitle = 'count of views';

    const directionSign = currentDirection ? '▲' : '▼';

    if (sortType === 'date') { this.dateTitle = `${this.dateTitle} ${directionSign}`; } else { this.viewsTitle = `${this.dateTitle} ${directionSign}`; }

    this.headerService.sortClick({ type: sortType, isAscending: currentDirection });

    // swap current direction asc/desc
    this.sortTypes[sortType] = currentDirection;
  }

  onFilter(): void {
    this.headerService.filterClick({ title: this.filterCriteria });
  }
}

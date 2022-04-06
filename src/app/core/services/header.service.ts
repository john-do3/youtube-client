import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISortModel } from 'src/app/youtube/models/sort.model';
import { IFilter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  isSearchSettingsVisible!: boolean;
  isSearchResultsVisible: boolean = false;
  filterCriteria!: IFilter;

  isSearchSettingsVisibleChange: Subject<boolean> = new Subject<boolean>();

  SearchClicked: Subject<boolean> = new Subject<boolean>();
  SortClicked: Subject<ISortModel> = new Subject<ISortModel>();
  FilterClicked: Subject<IFilter> = new Subject<IFilter>();

  searchSettingsClick(): void {
    this.isSearchSettingsVisible = !this.isSearchSettingsVisible;
    this.isSearchSettingsVisibleChange.next(this.isSearchSettingsVisible);
  }

  searchClick(): void {
    this.isSearchResultsVisible = true;
    this.SearchClicked.next(true);
  }

  sortClick(sortType: ISortModel): void{
    this.SortClicked.next(sortType);
  }

  filterClick(filterCriteria: IFilter): void{
    this.filterCriteria = filterCriteria;
    this.FilterClicked.next(filterCriteria);
  }

}

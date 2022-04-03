import { Component, ViewChild } from '@angular/core';
import { IFilter } from './models/filter.model';
import { ISortModel } from './models/sort.model';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  filterCriteria!: IFilter;

  isSearchResultsVisible: boolean = false;

  @ViewChild('searchResults')
    searchResults!: SearchResultsComponent;

  onSearchClicked() {
    this.isSearchResultsVisible = true;
  }

  onSortClicked(ev: ISortModel) {
    this.searchResults.sortData(ev);
  }

  onFilterClicked(ev: IFilter) {
    this.filterCriteria = ev;
  }
}

import { Component, ViewChild } from '@angular/core';
import { ISortModel } from './models/sort.model';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  isSearchResultsVisible: boolean = false;

  @ViewChild('searchResults')
  searchResults!: SearchResultsComponent;

  onSearchClicked(ev: any) {
    this.isSearchResultsVisible = true;
  }

  onSortClicked(ev: ISortModel){
    console.log(ev);
    this.searchResults.sortData(ev);
  }
}

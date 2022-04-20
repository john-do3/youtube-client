import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { IFilter } from 'src/app/core/models/filter.model';
import { HeaderService } from 'src/app/core/services/header.service';
import { loadData, retrievedSearchData, sortData } from 'src/app/redux/actions/data.action';
import { stateData } from 'src/app/redux/reducers/data.reducer';
import { selectData } from 'src/app/redux/selectors/data.selector';
import { ISearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  data$ = this.store.select(selectData).pipe(
    map((data: stateData) => data.cardData)
  );
  
  isSearchResultsVisible!: boolean;

  private subscriptions = new Subscription();

  constructor(
    private headerService: HeaderService,
    private youtubeService: YoutubeService,
    private store: Store
    ) {
    this.subscriptions.add(
      this.headerService.SearchClicked.subscribe((searchStr) => {
        
        this.store.dispatch(loadData({searchStr}));
        /*this.youtubeService.getData(searchStr).subscribe((val: ISearchResponse) => {
          this.store.dispatch(retrievedSearchData({ searchData: val.items }));
        });*/

      }),
    );

    this.subscriptions.add(
      this.headerService.SortClicked.subscribe((model) => {
        this.store.dispatch(sortData({sortType: model}));
      }),
    );

  }

  ngOnInit(): void {
    this.isSearchResultsVisible = this.headerService.isSearchResultsVisible;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}

import {
  ChangeDetectorRef,
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import * as moment from 'moment';
import { HeaderService } from 'src/app/core/services/header.service';
import { Observable, Subscription } from 'rxjs';
import { IFilter } from '../../../core/models/filter.model';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { ISortModel } from '../../models/sort.model';
import { ISearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  @Input()
  filterCriteria!: IFilter;

  @Input()
  data!: ISearchResponse;

  constructor(private headerService: HeaderService, private youtubeService: YoutubeService) {
    this.data = youtubeService.data;
  }

  ngOnInit(): void {
    // subscriptions may be grouped together through the add() method,
    // which will attach a child Subscription to the current Subscription.
    // When a Subscription is unsubscribed, all its children(and its grandchildren) will be unsubscribed as well.
    this.subscriptions.add(
      this.headerService.SortClicked.subscribe((model) => {
        this.sortData(model);
      }),
    );

    this.subscriptions.add(
      this.headerService.FilterClicked.subscribe((criteria) => {
        this.filterCriteria = criteria;
      }),
    );

    this.subscriptions.add(
      this.headerService.SearchClicked.subscribe((searchStr) => {
        this.searchData(searchStr);
      }),
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  searchData(searchStr: string): void {
    this.youtubeService.getData(searchStr).subscribe((val: ISearchResponse) => {
      this.youtubeService.data = val;
      this.data = val;
    });
  }

  sortData(sortType: ISortModel): void {
    this.data.items.sort((a: ISearchItem, b: ISearchItem) => {
      let aParam = null;
      let bParam = null;

      if (sortType.type === 'date') {
        aParam = moment(a.snippet.publishedAt);
        bParam = moment(b.snippet.publishedAt);
      } else if (sortType.type === 'views') {
        aParam = Number(a.statistics.viewCount);
        bParam = Number(b.statistics.viewCount);
      }

      if (aParam && bParam) {
        if (sortType.isAscending) {
          if (aParam < bParam) return 1;
          if (aParam > bParam) return -1;
        } else {
          if (aParam < bParam) return -1;
          if (aParam > bParam) return 1;
        }
      }

      return 0;
    });
  }
}

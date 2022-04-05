import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IFilter } from 'src/app/youtube/models/filter.model';
import { ISearchItem } from '../../../shared/models/search-item.model';
import { ISortModel } from '../../models/sort.model';
import { ISearchResponse } from '../../models/search-response.model';
import { searchData } from '../../models/search-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  data: ISearchResponse = searchData;

  @Input()
    filterCriteria!: IFilter;

  constructor() { }

  ngOnInit(): void {
  }

  sortData(sortType: ISortModel) {
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

import { createReducer, on } from '@ngrx/store';
import * as moment from 'moment';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import {
  addData, loadDataFail, retrievedSearchData, sortData,
} from '../actions/data.action';

export interface StateData {
  cardData: ISearchItem[];
  error: any
}

export const initialState: StateData = {
  cardData: [],
  error: null,
};

export const dataReducer = createReducer(
  initialState,

  on(addData, (state, { newData }) => ({
    cardData: [...state.cardData, newData],
    error: null,
  })),

  on(sortData, (state, { sortType }) => ({
    cardData: state.cardData.slice().sort((a: ISearchItem, b: ISearchItem) => {
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
    }),
    error: null,
  })),

  on(loadDataFail, (state, { error }) => ({
    cardData: [...state.cardData],
    error,
  })),

  on(retrievedSearchData, (state, { searchData }) => {
    const union: ISearchItem[] = [];
    searchData.forEach((element) => {
      if (!state.cardData.find((s) => s.id === element.id)) { union.push(element); }
    });

    return {
      cardData: [...state.cardData, ...union],
      error: null,
    };
  }),
);

import { createAction, props } from "@ngrx/store";
import { ISearchItem } from "src/app/shared/models/search-item.model";
import { ISortModel } from "src/app/youtube/models/sort.model";

export const addData = createAction(
    '[Data/Create] Add data',
    props<{ newData: ISearchItem }>()
);

export const loadData = createAction(
    '[Data/API] Load data',
    props<{ searchStr: string }>()
);

export const loadDataFail = createAction(
    '[Data/API] Load data fail',
    props<{ error: any }>()
);

export const retrievedSearchData = createAction(
    '[Data/API] Retrieved data',
    props<{ searchData: ReadonlyArray<ISearchItem> }>()
);

export const sortData = createAction(
    '[Data/Sort] Sort data',
    props<{sortType: ISortModel}>()
);
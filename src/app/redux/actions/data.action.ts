import { createAction, props } from "@ngrx/store";
import { ISearchItem } from "src/app/shared/models/search-item.model";
import { ISortModel } from "src/app/youtube/models/sort.model";

export const addData = createAction(
    '[Data/Create] Add data',
    props<{ newData: ISearchItem }>()
);

export const retrievedSearchData = createAction(
    '[Data/API] Search Data',
    props<{ searchData: ReadonlyArray<ISearchItem> }>()
);

export const sortData = createAction(
    '[Data/Sort] Sort data',
    props<{sortType: ISortModel}>()
);
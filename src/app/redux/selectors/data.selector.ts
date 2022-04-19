import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { ISearchItem } from 'src/app/shared/models/search-item.model';

export const selectData = createFeatureSelector<ISearchItem>('data');

export const selectBookCollection = createSelector(
    selectData,
    (data) => {
        return data ? data : [];
    }
);
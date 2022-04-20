import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { ISearchItem } from 'src/app/shared/models/search-item.model';
import { stateData } from '../reducers/data.reducer';

export const selectData = createFeatureSelector<stateData>('data');

export const selectDataCollection = createSelector(
    selectData,
    (data) => {
        return data ? data : [];
    }
);
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StateData } from '../reducers/data.reducer';

export const selectData = createFeatureSelector<StateData>('data');

export const selectDataCollection = createSelector(
  selectData,
  (data) => (data || []),
);

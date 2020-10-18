import { createSelector } from 'reselect';

const selectFilterState = (state) => state.visibilityFilter;

export const selectFilter = createSelector(
  [selectFilterState],
  (filter) => filter,
)
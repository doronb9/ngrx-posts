import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectPage = createSelector(
  createFeatureSelector('page'),
  (state: number) => {
    return state;
  }
);

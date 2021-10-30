import { createReducer, on } from "@ngrx/store";
import { nextPage } from "./page.actions";

export const initialState = 0;

export const pageReducer = createReducer(
  initialState,
  on(nextPage, (state) => state + 1)
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostModel } from "../models/post.model";

export const selectPosts = createSelector(
  createFeatureSelector('posts'),
  (state: PostModel[]) => {
    return state;
  }
);

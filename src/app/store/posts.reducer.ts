import { createReducer, on } from "@ngrx/store";
import { PostModel } from "../models/post.model";
import { getPosts } from "./posts.actions";

export const initialPosts: PostModel[] = [

];
export const postsReducer = createReducer(
  initialPosts,
  on(getPosts, (entries, newEntries) => {
    const newPostsArr = Object.values(newEntries.posts);
    const entriesClone: PostModel[] = JSON.parse(JSON.stringify(entries));
    newPostsArr.forEach(post => entriesClone.push(post));
    return entriesClone;
  }),
);

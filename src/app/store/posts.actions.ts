import { createAction, props } from "@ngrx/store";
import { PostModel } from "../models/post.model";

export const getPosts = createAction('Get Posts', props<{ posts: PostModel }>());

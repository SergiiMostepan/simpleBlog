import { combineReducers } from "redux";
import * as types from "./types";

export const postsReducer = (state = [], { type, payload }: any) => {
  switch (type) {
    case types.GETCONTACTSSTART:
      return [...state];
    case types.GETCONTACTSSUCSESS:
      return [...payload];

    case types.POSTCONTACTSSTART:
      return [...state];

    case types.POSTCONTACTSSUCSESS:
      return [...state, payload];

    case types.DELETECONTACTSSTART:
      return [...state];

    case types.DELETECONTACTSSUCSESS:
      return state.filter((post: any) => post.id !== payload);

    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  posts: postsReducer,
};
export const combineReducer = combineReducers(reducers);

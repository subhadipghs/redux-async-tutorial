import { combineReducers } from "redux";
import { postsReducer } from "./posts.reducer";

const rootReducer = combineReducers({
  post: postsReducer,
});

export { rootReducer };

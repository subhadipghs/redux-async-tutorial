import { fetching, fetch_error, set_post } from "../actions/posts.action";

const postsState = {
  isLoading: false,
  currentId: "",
  body: "",
  title: "",
  userId: "",
  error: "",
};

export function postsReducer(state = postsState, action) {
  switch (action.type) {
    case fetching: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case set_post: {
      // { type: 'fetch_error', payload: { error: 'something went wrong' }}
      const { id, post } = action.payload;
      console.log("at reducer ", post);
      return {
        ...state,
        currentId: id,
        body: post.body,
        title: post.title,
        userId: post.userId,
        isLoading: false,
      };
    }

    case fetch_error: {
      // dispatch action
      // { type: 'fetch_error', payload: { error: 'something went wrong' }}
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }

    default: {
      return postsState;
    }
  }
}

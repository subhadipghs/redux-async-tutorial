export const fetching = "fetching";

export const set_post = "set_post";

export const fetch_error = "fetch_error";

// start fetching
export const setLoading = () => ({
  type: fetching,
});

// action for fetch success
export const setPosts = (id, post) => ({
  type: set_post,
  payload: {
    id: id,
    post: post,
  },
});

// action for fetch error
export const setError = (message) => ({
  type: fetch_error,
  payload: {
    message: message,
  },
});

// action to fetch a the posts by from the backend
// takes
export const getPosts = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    // make an api call here. wait for the update
    const post = await getPostsApi(id);
    dispatch(setPosts(id, post));
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  }
};

export const getPostsApi = async (id) => {
  const value = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();

  return value;
};

export const postSelector = (state) => state.post; // select post from the state

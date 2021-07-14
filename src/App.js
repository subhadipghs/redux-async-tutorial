import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPosts, postSelector } from "./store/actions/posts.action";

function App() {
  const dispatch = useDispatch();

  // on click of the button fetch random posts
  const get = () => {
    try {
      const id = Math.floor(Math.random() * 50) + 1;
      dispatch(getPosts(id));
    } catch (error) {}
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={get}>Get Post</button>
        <PostView />
      </header>
    </div>
  );
}

function PostView() {
  const { isLoading, title, body, userId, currentId, error } =
    useSelector(postSelector);

  if (!currentId) {
    return <div>No post available</div>;
  }

  if (isLoading) {
    return <div>please wait....fetching posts...</div>;
  }

  if (error) {
    return <div>oops! {error}</div>;
  }

  return (
    <div>
      <div>id: {currentId}</div>
      <br />
      <div>title: {title}</div>
      <br />
      <div>body: {body}</div>
      <br />
      <div>userId: {userId}</div>
    </div>
  );
}

export default App;

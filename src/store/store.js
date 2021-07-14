import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

function configureStore(reducer, ...middlwares) {
  // add redux devtool integration
  const enhancer =
    (process.env.NODE_ENV !== "prod" &&
      typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducer,
    enhancer(applyMiddleware(thunk, ...middlwares))
  );

  return store;
}

export { configureStore };

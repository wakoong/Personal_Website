import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import reducer from "./reducers";

// const loggerMiddleware = logger()


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;

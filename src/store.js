import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
// import logger from "redux-logger";
import reducer from './redux';

// const loggerMiddleware = logger()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, apiMiddleware),
    typeof window === 'object' &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__() !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;

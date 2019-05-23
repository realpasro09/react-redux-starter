import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer";
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
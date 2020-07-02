import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';

const createStore = (preloadedState, { isServer, req = null }) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, ...getDefaultMiddleware()],
    preloadedState,
  });

  if (req || !isServer) {
    (store as any).sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default createStore;

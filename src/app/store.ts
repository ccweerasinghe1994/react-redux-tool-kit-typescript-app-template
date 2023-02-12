import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './RootSaga';
const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare).concat(logger),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;
export default store;
sagaMiddleWare.run(rootSaga);

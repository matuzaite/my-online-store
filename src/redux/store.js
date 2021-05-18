import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import root from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(root, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
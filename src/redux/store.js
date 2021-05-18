import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import root from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(root, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
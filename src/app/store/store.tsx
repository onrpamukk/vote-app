import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { combineReducer, InitialState } from './combineReducers';
import { isEnvLocal } from '../environment';

declare var window: any;
export var Store: any = {};

export const createStoreInstanceFNC = (): any => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = isEnvLocal() ? createStore(combineReducers(combineReducer), InitialState, composeEnhancers(applyMiddleware(thunk))) : createStore(combineReducers(combineReducer), InitialState, applyMiddleware(thunk));
    Store = store;
    return Store;
}
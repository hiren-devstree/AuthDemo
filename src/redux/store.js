import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    loader,
    vendor,
    toast,
    internetConn,
    user
} from './reducers';

const store = createStore(
    combineReducers({
        loader,
        vendor,
        toast,
        internetConn,
        user
    }),
    undefined,
    compose(applyMiddleware(thunk))
);

export default store;

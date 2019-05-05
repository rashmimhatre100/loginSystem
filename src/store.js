import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from "./reducers/userReducer";
const initialState = {};
const middleware = [thunk];
const store = createStore(combineReducers( { user } ), initialState, applyMiddleware(...middleware));

export default store; 
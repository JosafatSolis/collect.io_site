import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import session from "./SessionDuck";
import data from "./DataDuck";

const rootReducer = combineReducers({ session, data });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) );

export default store;
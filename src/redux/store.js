import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import Session from "./SessionDuck";
import Data from "./DataDuck";

const rootReducer = combineReducers({ Session, Data });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) );

export default store;
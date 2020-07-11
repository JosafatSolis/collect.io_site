import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import Card from "./CardDuck";
import Navigation from "./NavigationDuck";

const rootReducer = combineReducers({ Card, Navigation });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) );

export default store;
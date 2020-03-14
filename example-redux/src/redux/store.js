import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./reducers/rootReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

// applyMiddleware(thunk) // sin redux-devtools-extension
export const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

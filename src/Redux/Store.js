import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({
    fetch: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
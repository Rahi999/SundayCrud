import { combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./reducer";

const rootReducer = combineReducers({ AppReducer });

export const store = legacy_createStore(rootReducer);

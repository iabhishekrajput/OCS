import { combineReducers } from "redux";
import { breadcrumbReducer } from "./Breadcrumb/reducer";

export const rootReducer = combineReducers({ breadcrumb: breadcrumbReducer });

export type RootState = ReturnType<typeof rootReducer>;

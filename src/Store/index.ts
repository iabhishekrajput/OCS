import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import reduxLogger from "redux-logger";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, reduxLogger)
);

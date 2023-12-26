import { Reducer, combineReducers } from "redux";

import AuthReducer from "./auth";
import Types from "../types/auth";
import UserReducer from "./user";

const reducers = {
  auth: AuthReducer,
  user: UserReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const rootReducer: Reducer = (state, action) => {
  if (action.type === Types.LOG_OUT) {
    state = {};
  }
  return combinedReducer(state, action);
};

export default rootReducer;

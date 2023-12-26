import { Reducer } from "redux";

import { handleData } from "../middleware/handleData";
import Types from "../types/auth";

const initialState = {
  loading: false,
};

const AuthReducer: Reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case Types.SIGN_UP:
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState, loading: true }),
        success: (prevState) => ({
          ...prevState,
          loading: false,
        }),
        failure: (prevState) => ({ ...prevState, loading: false }),
      });
    case Types.LOG_IN:
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState, loading: true }),
        success: (prevState) => ({
          ...prevState,
          loading: false,
        }),
        failure: (prevState) => ({ ...prevState, loading: false }),
      });
    case Types.LOG_OUT: {
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState, loading: true }),
        success: (prevState) => ({
          ...prevState,
          loading: false,
        }),
        failure: (prevState) => ({ ...prevState, loading: false }),
      });
    }
    default:
      return state;
  }
};

export default AuthReducer;

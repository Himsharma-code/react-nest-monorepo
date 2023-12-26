import { Reducer } from "redux";

import { handleData } from "../middleware/handleData";
import Types from "../types/user";

const initialState = {
  user: null,
  loading: false,
};

const UserReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_USER:
      return handleData(state, action, {
        request: (prevState) => ({ ...prevState, loading: true }),
        success: (prevState) => ({
          ...prevState,
          user: payload.data || prevState.user,
          loading: false,
        }),
        failure: (prevState) => ({ ...prevState, loading: false }),
      });

    default:
      return state;
  }
};

export default UserReducer;

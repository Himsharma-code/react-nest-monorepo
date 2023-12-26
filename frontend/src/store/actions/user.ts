import { Dispatch } from "redux";

import Types from "../types/user";

export const getUser = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    payload: null,
    type: Types.SET_USER,
    asyncCall: async () => {
      // return await getUserApi(id);
    },
    onSuccess: () => {},
  });
};

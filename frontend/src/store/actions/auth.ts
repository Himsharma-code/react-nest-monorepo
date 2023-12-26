import { Dispatch } from "redux";

import Types from "../types/auth";
import { LoginProps, login as loginApi } from "../../api/auth";

interface AuthResponse {
  access_token: string;
  message?: string;
}

export const login =
  (data: LoginProps, cb?: (res: AuthResponse) => void) =>
  async (dispatch: Dispatch) => {
    dispatch({
      payload: data,
      type: Types.LOG_IN,
      asyncCall: async () => {
        return await loginApi(data);
      },
      onSuccess: (_: any, response: { data: AuthResponse }) => {
        if (cb) {
          cb(response.data);
        }
      },
      onFailure: (_: any, response: { data: AuthResponse }) => {
        if (cb) {
          cb(response.data);
        }
      },
    });
  };

export const logout = (cb?: () => void) => (dispatch: Dispatch) => {
  dispatch({
    type: Types.LOG_OUT,
    asyncCall: async () => {
      return { status: true };
    },
    onSuccess: () => {
      if (cb) {
        cb();
      }
    },
    onFailure: () => {},
  });
};

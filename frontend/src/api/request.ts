import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  default as BaseAxios,
  isAxiosError,
} from "axios";
import Cookie from "js-cookie";
import omit from "lodash/omit";

import store from "../store";
import { logout } from "../store/actions/auth";

type ApiResponse = {
  data: AxiosResponse<any, any> | null;
  status: "success" | "failure";
};

class RequestClass {
  axios: AxiosInstance;

  constructor() {
    this.axios = BaseAxios.create({ timeout: 60 * 60000 });
    this.axios.defaults.headers.common = {
      "X-Requested-With": "XMLHttpRequest",
    };
    this.axios.defaults.withCredentials = true;
  }

  async call(config: AxiosRequestConfig) {
    try {
      const serverBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const configHeaders = config?.headers || {};
      const configContentType = configHeaders.contentType;
      let headers: { [key: string]: string } = {
        Accept: "application/json",
        "Content-Type": (configContentType as string) ?? "application/json",
      };

      const accessToken = `${Cookie.get("token")}`;

      if (accessToken) {
        headers = {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        };
      }
      const response = await this.axios.request({
        baseURL: serverBaseUrl,
        headers,
        ...omit(config, "headers"),
        ...omit(configHeaders, "contentType"),
      });
      return { data: response.data, status: "success" } as ApiResponse;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorStatus = error?.response?.status || null;
        const data = error?.response || null;
        if (errorStatus === 401) {
          logout()(store.dispatch);
          setTimeout(() => {
            location.href = "/auth/login";
          }, 100);
        }
        return {
          status: "failure",
          data,
        } as ApiResponse;
      }
    }
  }
}

const Request = new RequestClass();
export { Request };

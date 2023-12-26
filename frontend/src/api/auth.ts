import { Request } from "./request";

export type LoginProps = {
  email: string;
  password: string;
};

export const login = async (data: LoginProps) => {
  return Request.call({
    url: `/api/login`,
    method: "POST",
    data,
  });
};

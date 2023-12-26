import { Request } from "./request";

export const getAllUsers = async () => {
  return Request.call({
    url: `/api/users`,
    method: "GET",
  });
};

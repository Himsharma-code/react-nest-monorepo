import * as authActions from "./auth";
import { useStoreActions } from "../hooks/index";

export const useActions = () => {
  return useStoreActions({
    ...authActions,
  });
};

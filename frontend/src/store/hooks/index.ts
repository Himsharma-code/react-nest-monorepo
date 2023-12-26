import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { AppDispatch, RootState } from "..";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type ReducerName = keyof RootState;

const useReducerData = (
  reducerName: ReducerName,
  attr: string,
  defaultValue: any,
) => {
  return useSelector(
    (state: RootState) =>
      (attr ? state?.[reducerName]?.[attr] : state?.[reducerName]) ||
      defaultValue,
  );
};

const useStoreActions = <T>(actions: T) => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(actions || {}, dispatch) as T,
    [actions],
  );
};

export { useStoreActions, useReducerData, useAppSelector, useAppDispatch };

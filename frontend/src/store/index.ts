import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import asyncActionCreator from "./middleware/asyncActionCreator";

const persistConfig = {
  key: "react-starter",
  storage,
  whitelist: ["user", "organization"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [asyncActionCreator, thunk],
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppHandler = {
  request: (state: RootState) => RootState;
  success: (state: RootState) => RootState;
  failure: (state: RootState) => RootState;
};

const persistor = persistStore(store);

export { store, persistor };
export default store;

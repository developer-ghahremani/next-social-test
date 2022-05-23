import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import settings from "./settings";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  [settings.name]: settings.reducer,
  [modal.name]: modal.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  reducer
);

const store = configureStore({
  reducer: persistedReducer,
  // reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

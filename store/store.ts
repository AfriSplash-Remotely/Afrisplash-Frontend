import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import auth from "./auth";
import { api } from "./services/api";

export const createStore = (options?: ConfigureStoreOptions["preloadedState"] | undefined) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    ...options,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
import formReducer from "./candidateOnboarding/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.formData'],
        ignoredPaths: ['form.imgFile.formData'],
      },
    }),
=======
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
>>>>>>> e3577e8f7a98a8ade8332f8257f03a575db16aab
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

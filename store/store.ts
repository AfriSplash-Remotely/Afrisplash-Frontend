import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import formReducer from "./candidateOnboarding/formSlice";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: {
    form: formReducer,
    rootReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.formData'],
        ignoredPaths: ['form.imgFile.formData'],
      },
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

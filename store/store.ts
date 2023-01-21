import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import formReducer from "./candidateOnboarding/formSlice";
import counterReducer from "./general/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.formData"],
        ignoredPaths: ["form.imgFile.formData"],
      },
    }),
});
// import rootReducer from "./reducers";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

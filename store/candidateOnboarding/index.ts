import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";
import { useRouter } from "next/router";
import { onboardingI } from "./interface";

const initialState: onboardingI = {
  bio: "",
  role: "",
  phone: "",
  location: "",
  profile_image: "",
  thumbnail: "",
  isLoading: false,
  skill: [],
  Langauge: [],
  experience: {
    company_name: "",
    position_held: "",
    location: "",
    job_type: "",
    date_start: "",
    date_end: "",
    description: "",
  },
  education: {
    institution_name: "",
    degree: "",
    field_of_study: "",
    date_start: "",
    date_end: "",
    description: "",
  },
};

type OnboardingSlice = Slice<onboardingI>;

export const onboardingSlice: OnboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setBio: (state, action: PayloadAction<{ bio: string; profile_image: any }>) => {
      state.profile_image = action.payload.profile_image;
      state.bio = action.payload.bio;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setAuth } = onboardingSlice.actions;
export const { removeAuth } = onboardingSlice.actions;

export default onboardingSlice.reducer;

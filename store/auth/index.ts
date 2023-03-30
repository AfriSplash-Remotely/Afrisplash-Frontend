import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { authApi, UserI } from "../services/auth";

interface AuthState {
  isAuthenticated: boolean;
  user: UserI | null;
  isLoading: boolean;
}

interface ISetAuth {
  user: UserI;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: {
    _id: "",
    auth_id: "",
    user_type: "",
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    account_setup_completed: false,
    role: "",
    avaliability: [],
    badge: 0,
    skills: [],
    jobs: [],
    hide_detail: false,
    ready_to_interview: false,
    activelyHiring: false,
    privateMode: false,
    friends: [],
    _company: "",
    work_history: [],
    extra_email: [],
    notifications: [],
    gifts: [],
    langauge: [],
    experience: [],
    education: [],
    created_at: "",
  },
  isLoading: false,
};

interface AuthSlice extends Slice<AuthState> {}

export const authSlice: AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<ISetAuth>) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = action.payload.isLoading;
    },
    removeAuth: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = initialState.isAuthenticated;
      state.isLoading = initialState.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;

      // stored in localStorage
      localStorage.setItem("access_token", action.payload.token);
    });
  },
});

export const { setAuth } = authSlice.actions;
export const { removeAuth } = authSlice.actions;

export default authSlice.reducer;

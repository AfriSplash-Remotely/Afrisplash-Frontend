import { api } from "./api";

export interface UserI {
  _id: string;
  auth_id: string;
  user_type: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  account_setup_completed: boolean;
  role: string;
  avaliability: string[];
  badge: number;
  skills: string[];
  jobs: string[];
  hide_detail: boolean;
  ready_to_interview: boolean;
  activelyHiring: boolean;
  privateMode: boolean;
  friends: string[];
  _company: string;
  work_history: string[];
  extra_email: string[];
  notifications: string[];
  gifts: string[];
  langauge: string[];
  experience: string[];
  education: string[];
  created_at: string;
}

export interface UserResponse {
  success: boolean;
  user: UserI;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  user_type: string;
  gender: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface ResendVerificationPayload {
  email: string;
}

interface SendPasswordVerificationPayload {
  email: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserResponse, LoginRequest>({
      query: (credentials: any) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: build.mutation<any, RegisterPayload>({
      query: (credentials: any) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    resendVerification: build.mutation<any, ResendVerificationPayload>({
      query: (credentials: any) => ({
        url: "/auth/verification/resend-email",
        method: "POST",
        body: credentials,
      }),
    }),
    sendPasswordVerification: build.mutation<any, SendPasswordVerificationPayload>({
      query: (credentials: any) => ({
        url: "/auth/send-password-email",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useResendVerificationMutation,
  useSendPasswordVerificationMutation,
} = authApi;

export const {
  endpoints: { login },
} = authApi;

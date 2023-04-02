import { onboardingI } from "../candidateOnboarding/interface";
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
  email: string;
  password: string;
  confirm_password: string;
}



export const onboardingApi = api.injectEndpoints({
  endpoints: (build) => ({
    candidateOnBaording: build.mutation<onboardingI, onboardingI>({
      query: (credentials: any) => ({
        url: "/candidate/onboarding",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useCandidateOnBaordingMutation } = onboardingApi;

export const {
  endpoints: { candidateOnBaording },
} = onboardingApi;

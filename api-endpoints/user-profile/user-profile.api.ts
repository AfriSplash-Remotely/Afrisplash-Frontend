import api from "@/utils/axios";
import { IGetUserProfileApiResponse } from "./user-profile.interface";

export const getCandidateProfile = async (jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const { data } = await api.get("/candidate");
    return data;
}

export const getRecruiterProfile = async (jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const { data } = await api.get("/recruiter");
    return data;
}
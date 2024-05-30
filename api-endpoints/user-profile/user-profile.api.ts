import api from "@/utils/axios";
import { IGetUserProfileApiResponse } from "./user-profile.interface";

export const getCandidateProfile = async (): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.get("/candidate");
    return data;
}

export const getRecruiterProfile = async (): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.get("/recruiter");
    return data;
}
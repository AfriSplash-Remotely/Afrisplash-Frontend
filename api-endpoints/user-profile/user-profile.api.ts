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

export const addEducation = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/add/education", body)
    return data
}
export const updateUser = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/user", body)
    return data
}
export const removeEducation = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/candidate/edit/remove/education/${id}`)
    return data
}
export const updateInterviewStatus = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/readytointerview", body)
    return data
}
export const addExperience = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/add/experience", body)
    return data
}
export const removeExperience = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/candidate/edit/remove/experience/${id}`)
    return data
}
export const addLanguage = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/add/language", body)
    return data
}
export const removeLanguage = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/candidate/edit/remove/language/${id}`)
    return data
}

export const editContactDetails = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/user/contact", body)
    return data
}

export const editUserDetail = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/user", body)
    return data
}
export const editBio = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/user/bio", body)
    return data
}
export const addSkill = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.put("/candidate/edit/add/skill", body)
    return data
}


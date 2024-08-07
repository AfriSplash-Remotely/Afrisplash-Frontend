import api from "@/utils/axios";
import { IGetUserProfileApiResponse } from "./recruiter-profile.interface";




export const getRecruiterProfile = async (): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.get("/recruiter");
    return data;
}

export const addEducationRecruiter = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/add/education", body)
    return data
}
export const removeEducationRecruiter = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/recruiter/edit/remove/education/${id}`)
    return data
}
export const updateHiringStatusRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/activelyhiring", body)
    return data
}
export const updateUserRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/user", body)
    return data
}
export const updatePrivacyStatusRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/privatemode", body)
    return data
}
export const addExperienceRecruiter = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/add/experience", body)
    return data
}
export const removeExperienceRecruiter = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/recruiter/edit/remove/experience/${id}`)
    return data
}
export const addLanguageRecruiter = async (body: object[]): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/add/language", body)
    return data
}
export const removeLanguageRecruiter = async (id: string): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.delete(`/recruiter/edit/remove/language/${id}`)
    return data
}

export const editContactDetailsRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/user/contact", body)
    return data
}

export const editUserDetailRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/user", body)
    return data
}
export const editBioRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/user/bio", body)
    return data
}
export const addSkillRecruiter = async (body: object): Promise<IGetUserProfileApiResponse> => {
    const { data } = await api.patch("/recruiter/edit/add/skill", body)
    return data
}


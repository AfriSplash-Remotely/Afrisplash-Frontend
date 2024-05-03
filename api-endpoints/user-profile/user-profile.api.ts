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

export const addEducation = async (body: object[], jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/add/education", body)
    return data
}
export const removeEducation = async (id: string, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put(`/candidate/edit/remove/education/${id}`)
    return data
}
export const updateInterviewStatus = async (body: object, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/readytointerview", body)
    return data
}
export const addExperience = async (body: object[], jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/add/experience", body)
    return data
}
export const removeExperience = async (id: string, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.delete(`/candidate/edit/remove/experience/${id}`)
    return data
}
export const addLanguage = async (body: object[], jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/add/language", body)
    return data
}
export const removeLanguage = async (id: string, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.delete(`/candidate/edit/remove/experience/${id}`)
    return data
}

export const editContactDetails = async (body: object, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/user/contact", body)
    return data
}

export const editUserDetail = async (body: object, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/user", body)
    return data
}
export const editBio = async (body: object, jwt: string): Promise<IGetUserProfileApiResponse> => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

    const { data } = await api.put("/candidate/edit/user/bio", body)
    return data
}


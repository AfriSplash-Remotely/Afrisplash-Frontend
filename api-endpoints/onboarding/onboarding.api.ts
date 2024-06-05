import api from "@/utils/axios";


export const postCaditateOnBoarding = async (payload: any, jwt: string) => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const {
        data: { data },
    } = await api.post(`candidate/onboarding`, { ...payload });
    return data;
};

export const postCompanyOnBoarding = async (payload: any, jwt: string) => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const {
        data: { data },
    } = await api.post(`recruiter/onboarding/`, { ...payload });
    return data;
};
export const createCompany = async (payload: any, jwt: string) => {
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.headers.common.accept = 'application/json';

    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const {
        data: { data },
    } = await api.post(`company`, { ...payload });
    return data;
};

export const getCompanyProfile = async (jwt: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const { data } = await api.get("company");
    return data;
}
export const verifyCompany = async (jwt: string, id:string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    const { data } = await api.patch("company/verify", {id:id});
    return data;
}


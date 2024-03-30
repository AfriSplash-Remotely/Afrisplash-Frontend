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
    } = await api.post(`company/`, { ...payload });
    return data;
};

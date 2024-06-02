import api from "@/utils/axios";

export const postCaditateOnBoarding = async (payload: object): Promise<object> => {
    const { data: { data } } = await api.post(`candidate/onboarding`, { ...payload });
    return data;
};

export const postCompanyOnBoarding = async (payload: object): Promise<object> => {
    const { data: { data } } = await api.post(`company/`, { ...payload });
    return data;
};

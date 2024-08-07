import api from "@/utils/axios";


import { CreateCompanyProps, singleCompanyResp } from "./company.interfaces";

export const fetchAllCompanies = async (): Promise<singleCompanyResp> => {
    const { data } = await api.get("/company");
    return data;
};

export const createCompany = async (companyPayload: CreateCompanyProps): Promise<singleCompanyResp> => {
    const { data } = await api.post("/company", companyPayload)
    return data
}
export const verifyCompany = async (verifyPayload: {id:string}): Promise<singleCompanyResp> => {
    const { data } = await api.patch("/company/verify", verifyPayload)
    return data
}



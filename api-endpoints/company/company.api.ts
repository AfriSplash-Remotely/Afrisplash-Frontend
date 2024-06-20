import api from "@/utils/axios";

import { setApiHeaders } from "@/constants/setApiHeaders";
import { singleCompanyResp } from "./company.interfaces";

export const fetchAllCompanies = async (): Promise<singleCompanyResp[]> => {
    const { data } = await api.get("/jobs");
    return data;
};

export const createCompany = async (companyPayload: object): Promise<singleCompanyResp> => {
    const { data } = await api.post("/company", companyPayload)
    return data
}
export const verifyCompany = async (verifyPayload: object): Promise<singleCompanyResp> => {
    const { data } = await api.post("/company/verify", verifyPayload)
    return data
}

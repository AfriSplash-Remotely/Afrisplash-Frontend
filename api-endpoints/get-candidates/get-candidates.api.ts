import api from "@/utils/axios";
import { IGetListOfCandidatesApiResponse } from "./get-candidates.interface";

export const getTotalCandidates = async (): Promise<IGetListOfCandidatesApiResponse> => {
    const { data } = await api.get("/users/candidates");
    return data;
}
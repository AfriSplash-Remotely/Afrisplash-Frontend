import api from "@/utils/axios";
import { IJobApiResponse, ICreateJobApiResponse } from "./jobs.interface";

export const fetchAllJobs = async (): Promise<IJobApiResponse> => {
  const { data } = await api.get("/jobs");
  return data;
};



export const createJob = async (jobPayload: object): Promise<ICreateJobApiResponse> => {
  const { data } = await api.post("/jobs", jobPayload)
  return data
}
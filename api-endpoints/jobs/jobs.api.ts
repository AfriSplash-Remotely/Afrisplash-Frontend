import api from "@/utils/axios";
import { IJobApiResponse, ICreateJobApiResponse, IJobDetailResponse } from "./jobs.interface";


export const fetchAllJobs = async (): Promise<IJobApiResponse> => {
  const { data } = await api.get("/jobs");
  return data;
};



export const createJob = async (jobPayload: object, jwt: string): Promise<ICreateJobApiResponse> => {
  api.defaults.headers.common['Content-Type'] = 'application/json';
  api.defaults.headers.common.accept = 'application/json';

  api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  const { data } = await api.post("/jobs", jobPayload)
  return data
}

export const fetchJobDetails = async (jobId: string): Promise<IJobDetailResponse> => {
  const { data } = await api.get(`/jobs/v/${jobId}`)
  return data.data
}
import api from "@/utils/axios";
import { IJobApiResponse, ICreateJobApiResponse, IJobDetailResponse, IJobApplyResponse } from "./jobs.interface";


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
};


export const applyForJob = async (jobId: string, jwt: string): Promise<IJobApplyResponse> => {
  api.defaults.headers.common['Content-Type'] = 'application/json';
  api.defaults.headers.common.accept = 'application/json';
  api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  const { data } = await api.post(`/jobs/a/${jobId}`)
  return data
}
export const saveJob = async (jobId: string, jwt: string): Promise<IJobApplyResponse> => {
  api.defaults.headers.common['Content-Type'] = 'application/json';
  api.defaults.headers.common.accept = 'application/json';
  api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

  const { data } = await api.patch(`/candidate/job/save/${jobId}`)
  return data
}

export const searchJobByType = async (type: string): Promise<IJobApiResponse> => {
  const { data } = await api.get(`/jobs/search/t/${type}`)
  return data.data
};
export const searchJobByCompany = async (company: string): Promise<IJobApiResponse> => {
  const { data } = await api.get(`/jobs/search/c/${company}`)
  return data.data
};
export const searchJobByLocation = async (location: string): Promise<IJobApiResponse> => {
  const { data } = await api.get(`/jobs/search/l/${location}`)
  return data.data
};
export const searchJobByDate = async (date: string): Promise<IJobApiResponse> => {
  const { data } = await api.get(`/jobs/search/d/${date}`)
  return data.data
};


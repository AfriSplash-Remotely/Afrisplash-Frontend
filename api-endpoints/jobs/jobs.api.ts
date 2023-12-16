import api from "@/utils/axios";
import { IJobApiResponse, ICreateJobApiResponse } from "./jobs.interface";
import Cookies from "js-cookie";


export const fetchAllJobs = async (): Promise<IJobApiResponse> => {
  const { data } = await api.get("/jobs");
  return data;
};



export const createJob = async (jobPayload: object): Promise<ICreateJobApiResponse> => {
  const { data } = await api.post("/jobs", jobPayload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get("accessToken")}`
    }
  })
  return data
}
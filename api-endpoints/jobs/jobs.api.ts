import axios from "@/utils/axios";
import { IJobApiResponse } from "./jobs.interface";

export const fetchAllJobs = async (): Promise<IJobApiResponse> => {
  const { data } = await axios.get("/jobs");
  return data;
};

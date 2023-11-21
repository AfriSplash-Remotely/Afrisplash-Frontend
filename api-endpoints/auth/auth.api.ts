import api from "@/utils/axios";
import { responseMessage } from "@/utils";

export const signUp = async (payload: any): Promise<responseMessage> => {
  const { data } = await api.post("/auth/register", payload);
  return data;
};


export const forgotPassword = async (email: string): Promise<responseMessage> => {
  const { data } = await api.post("/auth/forgot-password", { email });
  return data;
};

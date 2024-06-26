import api from "@/utils/axios";
import { responseMessage, ChangePasswordI, ChangePasswordPayload } from "@/utils";

export const signUp = async (payload: object): Promise<responseMessage> => {
  const { data } = await api.post("/auth/register", payload);
  return data;
};

export const forgotPassword = async (email: string): Promise<responseMessage> => {
  const { data } = await api.post("/auth/forgot-password", { email });
  return data;
};

export const changePassword = async (payload: ChangePasswordPayload): Promise<ChangePasswordI> => {
  const { data } = await api.put("/auth/change-password", payload)
  return data
}
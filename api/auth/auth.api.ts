import axios from "@/utils/axios";
import { responseMessage } from "@/utils";

export const forgotPassword = async (email: string): Promise<responseMessage> => {
  const { data } = await axios.post("/auth/forgot-password", { email });
  return data;
};

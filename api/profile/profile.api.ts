import axios from "@/utils/axios";
import { ProfileSettingI } from "./profile.interface";

export const updateProfile = async (
  updateProfileData: object
): Promise<ProfileSettingI> => {
  const { data } = await axios.post("/candidate/edit/user", {
    updateProfileData,
  });
  return data.data;
};

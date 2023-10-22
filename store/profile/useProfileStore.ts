import { create } from "zustand";
import { AccountSettings } from "../../utils/interface";
import axios from "@/utils/axios";

interface State {
  profile: AccountSettings[];
}

interface Actions {
  saveProfile: (profileInfo: AccountSettings) => void;
}

const IntialState: State = {
  profile: [],
};

export const useProfileStore = create<State & Actions>((set) => ({
  profile: IntialState.profile,
  saveProfile: async (editUserData: AccountSettings) => {
    const { data: response } = await axios.post(
      "/candidate/edit/user",
      editUserData
    );
    return set(response.data);

    // console.log(editUserData, "kokeo");
  },
}));

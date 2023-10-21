import { create } from "zustand";
import { AccountSettings } from "../../utils/interface";

interface State {
  profile: AccountSettings[];
}

interface Actions {
  saveProfile: (profileInfo: AccountSettings) => void;
}

const IntialState: State = {
  profile: [],
};

export const useProfileStore = create<State & Actions>((set, get) => ({
  profile: IntialState.profile,
  saveProfile: (profileData: AccountSettings) => {
    console.log(profileData, "kokeo");
  },
}));

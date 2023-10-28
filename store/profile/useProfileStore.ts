import { create } from "zustand";
import { ProfileUpdate } from "../../utils/interface";

interface State {
  profile: ProfileUpdate | [];
}

interface Actions {
  saveProfile: (profileInfo: ProfileUpdate) => void;
}

const IntialState: State = {
  profile: [],
};

export const useProfileStore = create<State & Actions>((set) => ({
  profile: IntialState.profile,
  saveProfile: (profileInfo) =>
    set((state) => ({ ...state, profile: profileInfo })),
}));

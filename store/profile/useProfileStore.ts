import { create } from "zustand";
import { ProfileUpdate } from "../../utils/interface";

interface State {
  profile: ProfileUpdate | [];
  updateLoading: boolean;
}

interface Actions {
  saveProfile: (profileInfo: ProfileUpdate) => void;
  setProfileUpateLoading: (isLoading: boolean) => void;
}

const IntialState: State = {
  profile: [],
  updateLoading: false,
};

export const useProfileStore = create<State & Actions>((set) => ({
  profile: IntialState.profile,
  updateLoading: IntialState.updateLoading,
  saveProfile: (profileInfo) =>
    set((state) => ({ ...state, profile: profileInfo })),
  setProfileUpateLoading: (isLoading) =>
    set((state) => ({ ...state, updateLoading: isLoading })),
}));

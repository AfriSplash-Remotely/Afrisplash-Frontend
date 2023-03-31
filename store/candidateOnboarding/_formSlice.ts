import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface formState {
  imgFile: object;
  bio: string;
  companyName: string;
  positionHeld: string;
  location: string;
  jobType: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
  institutionName: string;
  degree: string;
  fieldStudy: string;
  eduStartDate: string;
  eduEndDate: string;
  eduDescription: string;
  skillsCategory: string;
  experience: string;
  skills: any[];
}

const initialState: formState = {
  imgFile: { imgURL: "", file: "" },
  bio: "",
  companyName: "",
  positionHeld: "",
  location: "eg. Nigeria, Cairo, Zambia",
  jobType: "eg. Software engineer",
  startDate: "",
  endDate: "",
  jobDescription: "",
  institutionName: "",
  degree: "eg. HND, Bachelors degree",
  fieldStudy: "eg. engineering",
  eduStartDate: "",
  eduEndDate: "",
  eduDescription: "",
  skillsCategory: "Choose a Category",
  experience: "Select some skills",
  skills: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    imgUploadAction: (state, action: PayloadAction<object>) => {
      state.imgFile = action.payload;
    },
    bioAction: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    companyNameAction: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    positionHeldAction: (state, action: PayloadAction<string>) => {
      state.positionHeld = action.payload;
    },
    locationAction: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    jobTypeAction: (state, action: PayloadAction<string>) => {
      state.jobType = action.payload;
    },
    startDateAction: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    endDateAction: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    jobDescriptionAction: (state, action: PayloadAction<string>) => {
      state.jobDescription = action.payload;
    },
    institutionNameAction: (state, action: PayloadAction<string>) => {
      state.institutionName = action.payload;
    },
    degreeAction: (state, action: PayloadAction<string>) => {
      state.degree = action.payload;
    },
    fieldStudyAction: (state, action: PayloadAction<string>) => {
      state.fieldStudy = action.payload;
    },
    eduStartDateAction: (state, action: PayloadAction<string>) => {
      state.eduStartDate = action.payload;
    },
    eduEndDateAction: (state, action: PayloadAction<string>) => {
      state.eduEndDate = action.payload;
    },
    eduDescriptionAction: (state, action: PayloadAction<string>) => {
      state.eduDescription = action.payload;
    },
    experienceAction: (state, action: PayloadAction<string>) => {
      state.experience = action.payload;
    },
    skillsCategoryAction: (state, action: PayloadAction<string>) => {
      state.skillsCategory = action.payload;
    },
    skillsAction: (state, action: PayloadAction<[]>) => {
      state.skills = action.payload;
    },
  },
});

export const {
  imgUploadAction,
  bioAction,
  companyNameAction,
  positionHeldAction,
  locationAction,
  jobTypeAction,
  startDateAction,
  endDateAction,
  jobDescriptionAction,
  institutionNameAction,
  degreeAction,
  fieldStudyAction,
  eduStartDateAction,
  eduEndDateAction,
  eduDescriptionAction,
  skillsCategoryAction,
  experienceAction,
  skillsAction,
} = formSlice.actions;

export default formSlice.reducer;

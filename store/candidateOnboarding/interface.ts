export interface experienceI {
  company_name: string;
  position_held: string;
  location: string;
  job_type: string;
  date_start: string;
  date_end: string;
  description: string;
}

export interface educationI {
  institution_name: string;
  degree: string;
  field_of_study: string;
  date_start: string;
  date_end: string;
  description: string;
}
export interface LangaugeI {
  name: string;
  level: string;
}

export interface onboardingI {
  bio: string;
  role: string;
  phone: string;
  location: string;
  profile_image: string;
  thumbnail: string;
  experience: experienceI;
  education: educationI;
  skill: string[];
  Langauge: LangaugeI[];
  isLoading: boolean;
}

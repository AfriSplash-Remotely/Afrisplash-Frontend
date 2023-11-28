export interface responseMessage {
  success: boolean;
  data: string;
}


export interface ProfileUpdate {
  last_name: string;
  first_name: string;
  location: string;
  phone: string;
  email: string;
  profile_image: string;
}
export enum ACCOUNT_TYPE{
  candidate="candidate",
  recruiter="recruiter"
}

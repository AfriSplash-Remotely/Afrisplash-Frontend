export interface responseMessage {
  success: boolean;
  data: string;
}

export enum ACCOUNT_TYPE{
  candidate="candidate",
  recruiter="recruiter"
}
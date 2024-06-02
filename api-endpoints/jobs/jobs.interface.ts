interface Company {
  _id: string;
  name: string;
  logo: string;
  thumbnail: string;
  staff: number;
}
interface Author {
  _id: string;
  first_name: string;
  last_name: string;
  bio: string | null;
}
export interface Salary {
  min: number | string;
  max: number | string;
  currency: string;
  period: string;
  amount?: string
}
interface ExternalData {
  image: string | null;
  url: string | null;
  date: string | null;
}
interface Job {
  _id: string;
  _company: Company;
  _author: Author;
  title: string;
  industry: string;
  description: string;
  requirement: string;
  benefit: string;
  experience: string;
  type: string;
  status: "Active" | "Inactive";
  location: string;
  salary: Salary;
  redirect: boolean;
  redirect_url: string;
  verify: boolean;
  private: boolean;
  promoted: boolean;
  publish: boolean;
  expiry: string;
  service: string;
  external_data: ExternalData;
  isDirectApply: boolean;
  createdAt: string;
  updatedAt: string;
  salaryType: string;
  __v: number;
}
export interface IJobApiResponse {
  success: boolean;
  status: string;
  total: number;
  count: number;
  pagination: Record<string, unknown>;
  data: Job[];
}
export interface ICreateJobApiResponse {
  success: boolean;
  redirect: boolean;
  redirect_url: string;
  verify: boolean;
  private: boolean;
  promoted: boolean;
  publish: boolean;
  expiry: string;
  external_data: ExternalData;
  createdAt: string;
  updatedAt: string;
  data: Job[]
}

export interface IJobDetailAuthor {
  _id: string;
  first_name: string;
  last_name: string;
  bio: string;
  profile_image: string;
  thumbnail: string;
}
export interface IJobDetatilData {
  _id: string;
  _company: string;
  _author: IJobDetailAuthor;
}
export interface IJobDetailResponse {
  success: boolean;
  data: IJobDetatilData;
  title: string;
  industry: string;
  description: string;
  requirement: string;
  experience: string;
  benefit: string;
  type: string;
  status: string;
  location: string;
  salary: Salary;
  redirect: boolean;
  redirect_url: string;
  verify: boolean;
  private: boolean;
  promoted: boolean;
  publish: boolean;
  expiry: string;
  external_data: ExternalData;
  salaryType: string;
  applicants: [];
  createdAt: string;
  updatedAt: string;
  __v: number
}
export interface IJobApplyResponse {
  success: boolean;
  status: string;
  error: string;
}
interface RecruiterStat {
  totalJobs: number;
  totalApplicants: number;
}
export interface IRecruiterStatRespone {
  success: boolean;
  status: string;
  data: RecruiterStat,
  error: string;
}
export interface Applicant {
  _user: string
  date: string
  rejected: boolean
  _id: string
  accepted?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Pagination { }
export interface RecruiterJobData {
  _id: string
  _company: string
  _author: any
  title: string
  industry: string
  description: string
  requirement: string
  benefit?: string
  experience: string
  type: string
  status: string
  salaryType?: string
  salary?: Salary
  redirect: boolean
  redirect_url?: string
  verify: boolean
  private: boolean
  promoted: boolean
  publish: boolean
  expiry: string
  external_data: ExternalData
  applicants: Applicant[]
  createdAt: string
  updatedAt: string
  __v: number
  location?: string
}
export interface IRecruiterJobCreatedRes {
  success: boolean
  status: string
  count: number
  pagination: Pagination
  data: RecruiterJobData[]
}

export type JobApplicants = {
  status: string
  message: string
  data: {
    external_applicants: Array<{
      firstName: string
      lastName: string
      email: string
      country: string
      phoneNumber: string
      resumeURL: string
      jobTitle?: string
    }>
  }
}


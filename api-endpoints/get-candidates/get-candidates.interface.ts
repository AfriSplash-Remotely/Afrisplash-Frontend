import { UserProfile } from "../user-profile/user-profile.interface";

export type CandidateDetails = Pick<UserProfile, "_id" | "auth_id" | "first_name" | "last_name" | "email"
    | "role" | "availability" | "badge" | "skills" | "ready_to_interview" | "location" | "profile_image" | "thumbnail">;

export interface IGetListOfCandidatesApiResponse {
    success: boolean;
    status: string;
    total: number;
    count: number;
    pagination: object;
    data: Array<CandidateDetails>;
}
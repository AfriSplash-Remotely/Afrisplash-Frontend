interface Language {
    name: string;
    level: string;
    _id:string
}


interface Experience {
    company_name: string;
    position_held: string;
    location: string;
    job_type: string;
    date_start: string;
    date_end: string;
    description: string;
    _id:string
}

interface Education {
    institution_name: string;
    degree: string;
    field_of_study: string;
    date_start: string;
    date_end: string;
    description: string;
    _id:string 
}

interface Jobs {
    _job: string;
    date: string;
    state: string;
}

interface WorkHistory {
    company_name: string;
    position_held: string;
    date_start: string;
    date_end: string;
    description: string;
}

export interface UserProfile {
    _id: string;
    auth_id: string;
    user_type: string;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    bio: string;
    profile_image: string;
    thumbnail: string;
    cover_letter: string;
    cv: string;
    langauge: Array<Language>;
    account_setup_completed: boolean;
    location: string;
    role: string;
    availability: Array<string>;
    badge: number;
    phone_number: string;
    skills: Array<string>
    experience: Array<Experience>;
    education: Array<Education>;
    jobs: Array<Jobs>;
    settings: object;
    hide_detail: boolean;
    ready_to_interview: boolean;
    activelyHiring: boolean;
    privateMode: boolean;
    friends: Array<string>;
    _company: string;
    company_role: string;
    work_history: Array<WorkHistory>;
    extra_email: Array<string>;
    notifications: Array<string>;
    gifts: Array<string>;
    created_at: string;
}

export interface IGetUserProfileApiResponse {
    success: boolean;
    data: Array<UserProfile>;
}
export interface singleCompanyResp   {
    _id: string;
    name: string;
    role: string;
    logo: string;
    thumbnail: string;
    website: string;
    location: string;
    map: Record<string, unknown>;
    market: string[];
    staff: number;
    members: Array<{
        id: string;
        link: string;
    }>;
    one_Line_Pitch: string;
    description: string;
    company_email: string;
    company_phone: string;
    socials: Array<{
        platform: string;
        handle: string;
        link: string;
    }>;
    verified: boolean;
    created_by: string;
    jobs: string[];
    createdAt: string;
    updatedAt: string;
    data? : any;

};

export interface Social  {
    platform: string;
    handle: string;
    link: string;
};

export interface CreateCompanyProps  {
    name: string;
    role: string;
    company_email: string;
    company_phone: string;
    description: string;
    one_Line_Pitch: string;
    staff: number;
    website: string;
    industry: string;
    location: string;
    thumbnail: string;
    logo: string;
    market: string[];
    socials: Social[];
};
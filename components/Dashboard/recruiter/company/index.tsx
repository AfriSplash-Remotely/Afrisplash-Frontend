import React from "react";
import RecruiterProfileLayout from "@/layouts/recruiterProfileLayout";
import { useSession } from "next-auth/react";
import { createCompany, getCompanyProfile, verifyCompany } from "@/api-endpoints/onboarding/onboarding.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { getCandidateProfile } from "@/api-endpoints/user-profile/user-profile.api";





const Company = (): JSX.Element => {
    const { data: session, status } = useSession()
    // const { data, refetch } = useQuery(["companyProfile"], async () => {
    //     const response = await getCompanyProfile(session?.user?.accessToken as string)

    //     return response.data;
    // });
    
    const { mutate: createCompanyMutation, isLoading: companyLoading } = useMutation({
        mutationFn: (body: object) => createCompany(body, session?.user?.accessToken as string),
        onSuccess: (data) => {
            toast.success("company created  successfully ");
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })
    
   

    const { mutate: verifyCompanyMutation, isLoading: educationLoading } = useMutation({
        mutationFn: (id: string) => verifyCompany(session?.user?.accessToken as string, id as string,),
        onSuccess: (data) => {
            toast.success("company verified  successfully ");
          
           

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleVerifyCompany = (idx :string) => {

        const id = idx;
        verifyCompanyMutation(id);
    }


    const handleCreateCompany = () => {

        const body = {
            "_id": "64ddbca37ff26a9ea19a7738",
            "name": "Danilo enterprises.",
            "role": "Project Manager",
            "logo": "rice.com",
            "thumbnail": "lol.com",
            "website": "http://example.com",
            "location": "New York, USA",

            "market": [
                "Technology"
            ],
            "staff": 50,

            "one_Line_Pitch": "No. 1 Remote marketplace for Africa's talents",
            "description": "Harnessing the power of community to promote diversity in the global remote workforce through African talents, while creating opportunities for talents to ...",
            "company_email": "info@example.com",
            "company_phone": "1234567890",
            "socials": [
                {
                    "platform": "Twitter",
                    "handle": "example_twitter",
                    "link": "http://twitter.com/example_twitter"
                }
            ],
        }
        createCompanyMutation(body);
    }
    return (
        <RecruiterProfileLayout>
            <p>Recruiter company profile</p>
            <button className="bg-primary_green text-white px-4 py-2 mt-5 h-[40px] rounded-xl cursor-pointer" onClick={handleCreateCompany}>
                {companyLoading ? "Loading ..." : "Create company"}
            </button>

            {/* <div className="w-full flex flex-col gap-4">
                {data?.map((item: any, index: number) => {
                    return (
                        <button key={index} className="bg-primary_green text-white px-4 py-2 mt-5 h-[40px] rounded-xl cursor-pointer w-fit" onClick={() => handleVerifyCompany(item?._id)}>
                                Verify {item?.name}
                        </button>
                    )
                })}
            </div> */}

        </RecruiterProfileLayout>

    )
}

export default Company
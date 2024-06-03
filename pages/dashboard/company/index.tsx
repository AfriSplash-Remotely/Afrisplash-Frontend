import React from "react";
import { useSession } from "next-auth/react";
import RecruiterCompany from '@/components/Dashboard/recruiter/company/index';
import { ACCOUNT_TYPE } from "@/utils";


function Company(): JSX.Element | undefined {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterCompany />
    }

}

export default Company
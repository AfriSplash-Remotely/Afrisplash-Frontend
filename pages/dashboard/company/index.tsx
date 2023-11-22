import React from "react";
import RecruiterCompany from '@/components/Dashboard/recruiter/company/index';
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";


function Company(): JSX.Element | undefined {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <RecruiterCompany />
    }

}

export default Company
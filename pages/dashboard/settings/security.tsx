import React from "react";
import CandidateSecurity from "@/components/Dashboard/candidate/settings/security";
import RecruiterSecurity from '@/components/Dashboard/recruiter/settings/security';
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Security(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <RecruiterSecurity />
    }
    return <CandidateSecurity />

}


export default Security
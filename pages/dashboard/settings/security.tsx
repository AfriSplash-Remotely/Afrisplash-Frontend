import React from "react";
import { useSession } from "next-auth/react";
import CandidateSecurity from "@/components/Dashboard/candidate/settings/security";
import RecruiterSecurity from '@/components/Dashboard/recruiter/settings/security';
import { ACCOUNT_TYPE } from "@/utils";

function Security(): JSX.Element {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterSecurity />
    }
    return <CandidateSecurity />

}


export default Security
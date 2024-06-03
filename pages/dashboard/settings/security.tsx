import React from "react";
<<<<<<< HEAD
import CandidateSecurity from "@/components/Dashboard/candidate/settings/security";
import RecruiterSecurity from '@/components/Dashboard/recruiter/settings/security';
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Security(): JSX.Element {
    const { data: session, status } = useSession()
=======
import { useSession } from "next-auth/react";
import CandidateSecurity from "@/components/Dashboard/candidate/settings/security";
import RecruiterSecurity from '@/components/Dashboard/recruiter/settings/security';
import { ACCOUNT_TYPE } from "@/utils";

function Security(): JSX.Element {
    const { data: session } = useSession()
>>>>>>> head reset
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterSecurity />
    }
    return <CandidateSecurity />

}


export default Security
import React from "react";
import CandidateSettings from "@/components/Dashboard/candidate/settings/index";
import RecruiterSettings from "@/components/Dashboard/recruiter/settings/index";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";


function Settings(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterSettings />
    }
    return <CandidateSettings />

}


export default Settings

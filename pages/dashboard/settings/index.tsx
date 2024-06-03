import React from "react";
import { useSession } from "next-auth/react";
import CandidateSettings from "@/components/Dashboard/candidate/settings/index";
import RecruiterSettings from "@/components/Dashboard/recruiter/settings/index";
import { ACCOUNT_TYPE } from "@/utils";


function Settings(): JSX.Element {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterSettings />
    }
    return <CandidateSettings />
}

export default Settings

import React from "react";
import CandidateLanguage from "@/components/Dashboard/candidate/settings/language";
import RecruiterLanguage from "@/components/Dashboard/recruiter/settings/language";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Language(): JSX.Element {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterLanguage />
    }
    return <CandidateLanguage />
}

export default Language
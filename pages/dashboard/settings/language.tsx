import React from "react";
import CandidateLanguage from "@/components/Dashboard/candidate/settings/language";
import RecruiterLanguage from "@/components/Dashboard/recruiter/settings/language";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";


function Language(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <RecruiterLanguage />
    }
    return <CandidateLanguage />
}


export default Language
import React from "react";
import { useSession } from "next-auth/react";
import CandidateJobs from "@/components/Dashboard/candidate/jobs";
import RecruiterJobs from "@/components/Dashboard/recruiter/jobs";
import { ACCOUNT_TYPE } from "@/utils";

function Jobs(): JSX.Element {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterJobs />
    }
    return <CandidateJobs />
}

export default Jobs
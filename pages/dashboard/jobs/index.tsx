import React from "react";
<<<<<<< HEAD
import CandidateJobs from "@/components/Dashboard/candidate/jobs";
import RecruiterJobs from "@/components/Dashboard/recruiter/jobs";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";
function Jobs(): JSX.Element {
    const { data: session, status } = useSession()
=======
import { useSession } from "next-auth/react";
import CandidateJobs from "@/components/Dashboard/candidate/jobs";
import RecruiterJobs from "@/components/Dashboard/recruiter/jobs";
import { ACCOUNT_TYPE } from "@/utils";

function Jobs(): JSX.Element {
    const { data: session } = useSession()
>>>>>>> head reset
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterJobs />
    }
    return <CandidateJobs />
<<<<<<< HEAD


=======
>>>>>>> head reset
}

export default Jobs
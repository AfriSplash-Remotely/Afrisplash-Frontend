import React from "react";
import { useSession } from "next-auth/react";
import CandidateApplied from "@/components/Dashboard/candidate/applied";
import Applicants from "@/components/Dashboard/recruiter/applicants";
import { ACCOUNT_TYPE } from "@/utils";

function Applied(): JSX.Element {
    const { data: session } = useSession()
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <Applicants />
    }
    return <CandidateApplied />
}

export default Applied
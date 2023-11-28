import React from "react";
import CandidateApplied from "@/components/Dashboard/candidate/applied";
import Applicants from "@/components/Dashboard/recruiter/applicants";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Applied(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <Applicants />
    }
    return <CandidateApplied />

}


export default Applied
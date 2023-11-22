import React from "react";
import CandidateMessages from "@/components/Dashboard/candidate/messages";
import RecruiterMessages from "@/components/Dashboard/recruiter/messages";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Messages(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <RecruiterMessages />
    }
    return <CandidateMessages />


}


export default Messages

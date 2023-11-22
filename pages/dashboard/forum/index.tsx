import React from "react";
import CandidateTrending from "@/components/Dashboard/candidate/forum";
import RecruiterForum from "@/components/Dashboard/recruiter/forum";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Forum(): JSX.Element {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <RecruiterForum />
    }
    return <CandidateTrending />

}

export default Forum
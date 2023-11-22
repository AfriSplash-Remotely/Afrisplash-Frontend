import React from "react";
import CandidateMentors from "@/components/Dashboard/candidate/forum/mentors";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Mentors(): JSX.Element | undefined {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.candidate) {
        return <CandidateMentors />
    }
}


export default Mentors
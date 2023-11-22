import React from "react";
import CandidateSplash from "@/components/Dashboard/candidate/forum/splash";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Splash(): JSX.Element | undefined {
    const { data: session, status } = useSession()
    if (session && session.user && session.user.role === ACCOUNT_TYPE.recruiter) {
        return <CandidateSplash />
    }
}


export default Splash
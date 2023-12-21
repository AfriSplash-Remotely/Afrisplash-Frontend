import React from "react";
import CandidateProfile from "@/components/Dashboard/candidate/profile";
import RecruiterProfile from "@/components/Dashboard/recruiter/profile";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Profile(): JSX.Element {
    const { data: session, status } = useSession()
    console.log({ session, status })
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterProfile />;
    }

    return <CandidateProfile />
}


export default Profile
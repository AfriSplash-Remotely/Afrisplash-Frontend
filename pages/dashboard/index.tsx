import React from "react";
import Candidate from "@/components/Dashboard/candidate";
import Recruiter from "@/components/Dashboard/recruiter";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Dashbaord() {
    const { data: session, status } = useSession()
    console.log({ session, status })
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <Recruiter />;
    }

    return <Candidate />
}


export default Dashbaord
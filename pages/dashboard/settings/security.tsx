import React from "react";
import { NextPage } from "next";
import CandidateSecurity from "@/components/Dashboard/candidate/settings/security";
import RecruiterSecurity from '@/components/Dashboard/recruiter/settings/security';



const Security: NextPage = () => {
    return (
        <>
            <CandidateSecurity />
            {/* <RecruiterSecurity/> */}
        </>
    )
}


export default Security
import React from "react";
import { NextPage } from "next";
import CandidateSettings from "@/components/Dashboard/candidate/settings/index";
import RecruiterSettings from "@/components/Dashboard/recruiter/settings/index";



const Settings: NextPage = () => {
    return (
        <>
            <CandidateSettings />
            {/* <RecruiterSettings/> */}
        </>
    )
}


export default Settings
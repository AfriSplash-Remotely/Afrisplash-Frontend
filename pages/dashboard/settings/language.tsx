import React from "react";
import { NextPage } from "next";
import CandidateLanguage from "@/components/Dashboard/candidate/settings/language";
import RecruiterLanguage from "@/components/Dashboard/recruiter/settings/language";



const Language: NextPage = () => {
    return (
        <>
            <CandidateLanguage />
            {/* <RecruiterLanguage/> */}
        </>
    )
}


export default Language
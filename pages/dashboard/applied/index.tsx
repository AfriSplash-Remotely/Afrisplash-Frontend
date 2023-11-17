import React from "react";
import { NextPage } from "next";
import CandidateApplied from "@/components/Dashboard/candidate/applied";
import Applicants from "@/components/Dashboard/recruiter/applicants";


const Applied: NextPage = () => {
    return (
        <>
            <CandidateApplied />
            {/* <Applicants/> */}
        </>
    )
}


export default Applied
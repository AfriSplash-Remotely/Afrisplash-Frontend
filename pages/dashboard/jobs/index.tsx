import React from "react";
import { NextPage } from "next";

import CandidateJobs from "@/components/Dashboard/candidate/jobs";
import RecruiterJobs from "@/components/Dashboard/recruiter/jobs";

const Jobs: NextPage = () => {
    return (
        <>
            <CandidateJobs />
            {/* <RecruiterJobs/> */}
        </>
    )
}

export default Jobs
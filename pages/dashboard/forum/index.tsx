import React from "react";
import { NextPage } from "next";
import CandidateTrending from "@/components/Dashboard/candidate/forum";
import RecruiterForum from "@/components/Dashboard/recruiter/forum";

const Forum: NextPage = () => {
    return (
        <>
            <CandidateTrending />
            {/* <RecruiterForum/> */}
        </>
    )
}


export default Forum
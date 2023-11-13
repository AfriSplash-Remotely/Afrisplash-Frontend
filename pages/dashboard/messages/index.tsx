import React from "react";
import { NextPage } from "next";
import CandidateMessages from "@/components/Dashboard/candidate/messages";
import RecruiterMessages from "@/components/Dashboard/recruiter/messages";

const Messages: NextPage = () => {
    return (
        <>
            <CandidateMessages />
            {/* <RecruiterMessages/> */}
        </>
    )
}


export default Messages

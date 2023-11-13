import React from "react";
import { NextPage } from "next";
import CandidateNotification from "@/components/Dashboard/candidate/settings/notifications";
import RecruiterNotification from "@/components/Dashboard/recruiter/settings/notifications";



const Notification: NextPage = () => {
    return (
        <>
            <CandidateNotification />
            {/* <RecruiterNotification/> */}
        </>
    )
}


export default Notification
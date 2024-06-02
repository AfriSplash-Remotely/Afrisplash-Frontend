import React from "react";
import Candidate from "@/components/Dashboard/candidate";
import Recruiter from "@/components/Dashboard/recruiter";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";
import { saveUserSession } from "@/utils/axios/constant";

function Dashbaord(): JSX.Element {
    const { data: session } = useSession();

    saveUserSession(session, 1);

    if (
        session &&
        session.user &&
        session.user.userType === ACCOUNT_TYPE.recruiter
    ) {
        return <Recruiter />;
    }

    return <Candidate />;
}

export default Dashbaord;

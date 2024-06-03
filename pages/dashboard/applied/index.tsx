import React from "react";
<<<<<<< HEAD
import CandidateApplied from "@/components/Dashboard/candidate/applied";
import Applicants from "@/components/Dashboard/recruiter/applicants";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Applied(): JSX.Element {
    const { data: session, status } = useSession()
=======
import { useSession } from "next-auth/react";
import CandidateApplied from "@/components/Dashboard/candidate/applied";
import Applicants from "@/components/Dashboard/recruiter/applicants";
import { ACCOUNT_TYPE } from "@/utils";

function Applied(): JSX.Element {
    const { data: session } = useSession()
>>>>>>> head reset
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <Applicants />
    }
    return <CandidateApplied />
<<<<<<< HEAD

}


=======
}

>>>>>>> head reset
export default Applied
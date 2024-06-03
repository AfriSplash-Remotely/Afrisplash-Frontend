import React from "react";
import CandidateLanguage from "@/components/Dashboard/candidate/settings/language";
import RecruiterLanguage from "@/components/Dashboard/recruiter/settings/language";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

<<<<<<< HEAD

function Language(): JSX.Element {
    const { data: session, status } = useSession()
=======
function Language(): JSX.Element {
    const { data: session } = useSession()
>>>>>>> head reset
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterLanguage />
    }
    return <CandidateLanguage />
}

<<<<<<< HEAD

=======
>>>>>>> head reset
export default Language
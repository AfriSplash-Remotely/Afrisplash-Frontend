import React from "react";
import CandidateNotification from "@/components/Dashboard/candidate/settings/notifications";
import RecruiterNotification from "@/components/Dashboard/recruiter/settings/notifications";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";

function Notification(): JSX.Element {
<<<<<<< HEAD
    const { data: session, status } = useSession()
=======
    const { data: session } = useSession()
>>>>>>> head reset
    if (session && session.user && session.user.userType === ACCOUNT_TYPE.recruiter) {
        return <RecruiterNotification />
    }
    return <CandidateNotification />
<<<<<<< HEAD

}


=======
}

>>>>>>> head reset
export default Notification
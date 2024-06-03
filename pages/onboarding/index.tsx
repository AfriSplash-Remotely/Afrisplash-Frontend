<<<<<<< HEAD
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
=======
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
>>>>>>> head reset
import CandidateOnboarding from "@/components/onboarding/candidate";
import RecruiterOnboarding from "@/components/onboarding/recruiter";

const Onboarding = (): JSX.Element => {
<<<<<<< HEAD
  const { data: session, status } = useSession()
  const router = useRouter();


=======
  const { data: session } = useSession()
  const router = useRouter();

>>>>>>> head reset
  React.useEffect(() => {
    if (session && session?.user?.accessToken && session?.user?.account_setup_completed) {
      router.push("/dashboard");
    }
<<<<<<< HEAD
  }, [session])
  
  console.log({ fg: session?.user?.userType })
=======
  }, [router, session])
  
>>>>>>> head reset
  const onboarding = {
    candidate: <CandidateOnboarding />,
    recruiter: <RecruiterOnboarding />
  }

  return session && session.user && onboarding[session.user.userType] || <></>
};

export default Onboarding;

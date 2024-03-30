import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import CandidateOnboarding from "@/components/onboarding/candidate";
import RecruiterOnboarding from "@/components/onboarding/recruiter";

const Onboarding = (): JSX.Element => {
  const { data: session, status } = useSession()
  const router = useRouter();


  React.useEffect(() => {
    if (session && session?.user?.accessToken && session?.user?.account_setup_completed) {
      router.push("/dashboard");
    }
  }, [session])
  
  console.log({ fg: session?.user?.userType })
  const onboarding = {
    candidate: <CandidateOnboarding />,
    recruiter: <RecruiterOnboarding />
  }

  return session && session.user && onboarding[session.user.userType] || <></>
};

export default Onboarding;

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CandidateOnboarding from "@/components/onboarding/candidate";
import RecruiterOnboarding from "@/components/onboarding/recruiter";

const Onboarding = (): JSX.Element => {
  const { data: session } = useSession()
  const router = useRouter();

  React.useEffect(() => {
    if (session && session?.user?.accessToken && session?.user?.account_setup_completed) {
      router.push("/dashboard");
    }
  }, [router, session])
  
  const onboarding = {
    candidate: <CandidateOnboarding />,
    recruiter: <RecruiterOnboarding />
  }

  return session && session.user && onboarding[session.user.userType] || <></>
};

export default Onboarding;

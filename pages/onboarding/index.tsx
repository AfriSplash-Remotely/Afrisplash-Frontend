import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CandidateOnboarding from "@/components/onboarding/candidate";
import RecruiterOnboarding from "@/components/onboarding/recruiter";

const Onboarding = (): JSX.Element => {
  const { data: session } = useSession()
  const router = useRouter();
  const [isReady, setIsReady] = React.useState<boolean>(false)

  React.useEffect(() => {

    const handleReadyState = async () => {
      if (session && session?.user?.accessToken && session?.user?.account_setup_completed) {
        setIsReady(true)
        router.push("/dashboard");
      } else {
        setIsReady(false)
      }
    }
    handleReadyState()
  }, [router, session])

  const onboarding = {
    candidate: <CandidateOnboarding />,
    recruiter: <RecruiterOnboarding />
  }

  return (
    <div>
      {isReady ? (<div className="h-screen flex justify-center items-center">
        <h5 className="text-4xl font-medium text-primary_green">Loading...</h5>
      </div>) : (
        session && session.user && onboarding[session.user.userType] || <></>
      )}
    </div>
  )
};

export default Onboarding;

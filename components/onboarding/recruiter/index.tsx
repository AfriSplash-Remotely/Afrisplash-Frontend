import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import styles from "styles/Onboarding.module.scss";
import { postCompanyOnBoarding } from "@/api-endpoints/onboarding/onboarding.api";
import Bio from "@/components/onboarding/recruiter/Bio";
import GetStarted from "./GetStarted";
import checked from "assets/candidateOnboarding/checked.svg";
import logo from "assets/candidateOnboarding/logo.svg";

const RecruiterOnboarding = (): JSX.Element => {
    const router = useRouter();

    const [step, setStep] = useState(1);
    const [companyOnbardingData, setCompanyOnbardingData] = useState({})
    const arr = [
        { id: 1, name: "Get Started" },
        { id: 2, name: "Bio" },
    ];

    const handleGetData = (data: any) => {
        setCompanyOnbardingData((prev) => { return { ...prev, ...data } })
    }

    const handleSubmit = () => {
        postCompanyOnBoarding(companyOnbardingData).then(() => {
            router.push("/dashboard");
        }).catch(() => {
            toast.error("An Error Occured while trying to onboard user");
        })
    };

    return (
        <div className={styles.bg}>
            <div className="max-w-5xl mx-auto mt-5 pb-10 bg-white shadow-xl rounded-xl px-3">
                <div className="flex mb-14 justify-center items-center">
                    <div className="flex items-center justify-center flex-1">
                        <div className="w-12 h-12 relative">
                            <Image src={logo} fill alt="logo" />
                        </div>
                        <p className="text-sm">AfriSplashRemotely</p>
                    </div>
                </div>
                <div className="mb-5 max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Create your account in a few steps
                    </h2>
                    <p className="text-md">Provide your details to create your account</p>
                </div>
                <div className="px-12 mb-8">
                    <div className="flex justify-evenly flex-wrap gap-3 mb-10 sm:mb-16 md:mb-20">
                        {arr.map((item, index) => (
                            <div className="flex flex-col flex-shrink-0 basis-40" key={index}>
                                <div
                                    className={`h-1 rounded-full ${item.id <= step ? `bg-green-900` : `bg-gray-400`
                                        } mb-1.5`}
                                />
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Image src={checked} width={15} height={15} alt="icon" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-600 ml-1">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {step === 1 && <GetStarted getDataFn={(d) => handleGetData(d)} />}
                {step === 2 && <Bio getDataFn={(d) => handleGetData(d)} />}

                <div className="flex justify-center items-center gap-4 md:gap-12 font-medium">
                    <Link href="#" legacyBehavior>
                        <button
                            className="border-gray-400 border general-btn"
                            onClick={() => step > 1 && setStep(step - 1)}
                        >
                            Prev.
                        </button>
                    </Link>
                    {step !== 2 && (
                        <button
                            className="bg-indigo-900 text-gray-400 general-btn"
                            onClick={() => {
                                step < 4 && setStep(step + 1);
                            }}
                        >
                            Next
                        </button>
                    )}
                    {step === 2 && (
                        <button
                            className="bg-indigo-900 text-gray-400 general-btn"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecruiterOnboarding;

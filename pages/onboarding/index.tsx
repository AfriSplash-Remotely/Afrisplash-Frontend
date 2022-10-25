import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "store/store";
import styles from "styles/Onboarding.module.scss";
import checked from "assets/candidateOnboarding/checked.svg";
import logo from "assets/candidateOnboarding/logo.svg";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const arr = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills" },
  ];
  const formData = useSelector((state: RootState) => state.form);
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className={styles.bg}>
      <div className="max-w-5xl mx-auto mt-5 pb-10 bg-white shadow-xl rounded-xl px-3">
        <div className="flex mb-14 justify-center items-center">
          <Link href="/">
            <a>
              <ArrowLeftIcon className="w-6 ml-4" />
            </a>
          </Link>
          <div className="flex items-center justify-center flex-1">
            <Image src={logo} width="100%" height="100%" alt="logo" />
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
                  className={`h-1 rounded-full ${
                    item.id <= step ? `bg-green-900` : `bg-gray-400`
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
        {step === 1 && <Bio />}
        {step === 2 && <Experience />}
        {step === 3 && <Education />}
        {step === 4 && <Skills />}
        <div className="flex justify-center items-center gap-4 md:gap-12 font-medium">
          <Link href="#">
            <button
              className="border-gray-400 border general-btn"
              onClick={() => step > 1 && setStep(step - 1)}
            >
              Prev.
            </button>
          </Link>
          {step !== 4 && (
            <Link href="#">
              <button
                className="bg-indigo-900 text-gray-400 general-btn"
                onClick={() => {
                  step < 4 && setStep(step + 1);
                }}
              >
                Next
              </button>
            </Link>
          )}
          {step === 4 && (
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

export default Onboarding;

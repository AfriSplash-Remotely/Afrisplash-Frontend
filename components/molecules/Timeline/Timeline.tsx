import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import styles from "./Timeline.module.scss";

const Timeline = ({
  isJobDetails,
  isPackagePlan,
  isConfirmation,
  setIsJobDetails,
  setIsPackagePlan,
  setIsConfirmation,
  jobDetails,
  packagePlan,
  confirmation,
}: any) => {
  const changeJobDetailsColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(false);
    setIsConfirmation(false);
    jobDetails();
  };

  const changePackagePlanColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(false);
    packagePlan();
  };

  const changeConfirmationColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(true);
    confirmation();
  };
  const handleRadioChange = (e: any) => {
    switch (e.target.value) {
      case "job-details":
        changeJobDetailsColor();
        break;
      case "package-plan":
        changePackagePlanColor();
        break;
      case "confirmation":
        changeConfirmationColor();
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={`w-[75%] lg:w-[47%] ${styles.timelineContainer} w-full flex align-center justify-between px-5`}
    >
      <div className="sm:w-4/12">
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isJobDetails ? "#D9DEDC" : "#0D5520",
            color: !isJobDetails ? "#D9DEDC" : "#0D5520",
            border: !isJobDetails ? "1px solid #D9DEDC" : "1px solid #0D5520",
          }}
        ></div>

        {!isJobDetails ? (
          <label className={`${styles.container} md:flex md:align-center`}>
            <input
              type="radio"
              name="radio"
              value="job-details"
              onChange={handleRadioChange}
            />
            <span className={`${styles.description}`}>Job details</span>
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className={`${styles.container} flex align-center my-3 mx-1`}>
            <CheckCircleIcon className="h-5 w-5 mr-1 fill-[#0D5520] stroke-white" />
            <span className={`${styles.description}`}>Job details</span>
          </div>
        )}
      </div>

      <div className={`w-4/12 ${styles.packagePlan}`}>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isPackagePlan ? "#D9DEDC" : " #0D5520",
            color: !isPackagePlan ? "#D9DEDC" : " #0D5520",
            border: !isPackagePlan ? "1px solid #D9DEDC" : "1px solid  #0D5520",
          }}
        ></div>
        {!isPackagePlan ? (
          <label className={styles.container}>
            <span
              className={`leading-[1.2rem] lg:leading-[2rem] ${styles.packagePlan}`}
            >
              Package & plan
            </span>
            <input
              type="radio"
              name="radio"
              value="package-plan"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className="flex align-center my-3 mx-1">
            <CheckCircleIcon className="h-5 w-5 mr-1 fill-[#0D5520] stroke-white" />
            <span className={`${styles.packagePlan}`}>Package & plan</span>
          </div>
        )}
      </div>
      <div className={`w-4/12 ${styles.confirmation}`}>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isConfirmation ? "#D9DEDC" : "#0D5520",
            color: !isConfirmation ? "#D9DEDC" : "#0D5520",
            border: !isConfirmation ? "1px solid #D9DEDC" : "1px solid #0D5520",
          }}
        ></div>
        {!isConfirmation ? (
          <label className={styles.container}>
            <span className={`${styles.description}`}>Confirmation</span>
            <input
              type="radio"
              name="radio"
              value="confirmation"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className="flex align-center my-3 mx-1">
            <CheckCircleIcon className="h-5 w-5 mr-1 fill-[#0D5520] stroke-white" />
            <span className={`${styles.description}`}>Confirmation</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;

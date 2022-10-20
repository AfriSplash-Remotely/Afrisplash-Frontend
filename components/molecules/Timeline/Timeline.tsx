import React from "react";
import styles from "./Timeline.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Timeline = ({ 
  isJobDetails,
  isPackagePlan,
  isConfirmation,
  setIsJobDetails,
  setIsPackagePlan,
  setIsConfirmation,
  jobDetails,
  packagePlan,
  confirmation
} : any) => {

  const changeJobDetailsColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(false);
    setIsConfirmation(false);
    jobDetails()
  };

  const changePackagePlanColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(false);
    packagePlan()
  };

  const changeConfirmationColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(true);
    confirmation()
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
      default:
        break;
    }
  };
  return (
    <div className={styles.timelineContainer}>
      <div className="w-4/12">
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isJobDetails ? "#D9DEDC" : "#0D5520",
            color: !isJobDetails ? "#D9DEDC" : "#0D5520",
            border: !isJobDetails ? "1px solid #D9DEDC" : "1px solid #0D5520",
          }}
        ></div>

        {!isJobDetails ? (
          <label className={styles.container}>
            <span className={styles.description}>Job details</span>
            <input
              type="radio"
              name="radio"
              value="job-details"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className={styles.container}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.fontIcon}
            />
            <span className={styles.description}>Job details</span>
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
            <span className={`${styles.description}`}>Package & plan</span>
            <input
              type="radio"
              name="radio"
              value="package-plan"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className={styles.container}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.fontIcon}
            />
            <span className={`${styles.description} md:text-sm sm:text-xs`}>Package & plan</span>
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
        {!isConfirmation? (
          <label className={styles.container}>
            <span className={styles.description}>Confirmation</span>
            <input
              type="radio"
              name="radio"
              value="confirmation"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        ) : (
          <div className={styles.container}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.fontIcon}
            />
            <span className={styles.description}>Confirmation</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;

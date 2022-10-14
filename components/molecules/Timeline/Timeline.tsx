import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Timeline = (props:any) => {
  const [isJobDetails, setIsJobDetails] = useState(false);
  const [isPackagePlan, setIsPackagePlan] = useState(false);
  const [isConfirmation, setIsConfirmation] = useState(false);
  
  const changeJobDetailsColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(false);
    setIsConfirmation(false);
  };
  const changePackagePlanColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(false);
  };
  const changeConfirmationColor = () => {
    setIsJobDetails(true);
    setIsPackagePlan(true);
    setIsConfirmation(true);
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
            backgroundColor: !isJobDetails ? "#D9DEDC" : "green",
            color: !isJobDetails ? "#D9DEDC" : "green",
            border: !isJobDetails ? "1px solid #D9DEDC" : "1px solid green",
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
            backgroundColor: !isPackagePlan ? "#D9DEDC" : "green",
            color: !isPackagePlan ? "#D9DEDC" : "green",
            border: !isPackagePlan ? "1px solid #D9DEDC" : "1px solid green",
          }}
        ></div>
        {!isPackagePlan ? (
          <label className={styles.container}>
            <span className={styles.description}>Package & plan</span>
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
            <span className={styles.description}>Package & plan</span>
          </div>
        )}
      </div>
      <div className={`w-4/12 ${styles.confirmation}`}>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isConfirmation ? "#D9DEDC" : "green",
            color: !isConfirmation ? "#D9DEDC" : "green",
            border: !isConfirmation ? "1px solid #D9DEDC" : "1px solid green",
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

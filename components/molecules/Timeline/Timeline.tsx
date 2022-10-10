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
      <div>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isJobDetails ? "gray" : "green",
            color: !isJobDetails ? "gray" : "green",
            border: !isJobDetails ? "1px solid gray" : "1px solid green",
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

      <div className={styles.packagePlan}>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isPackagePlan ? "gray" : "green",
            color: !isPackagePlan ? "gray" : "green",
            border: !isPackagePlan ? "1px solid grey" : "1px solid green",
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
      <div className={styles.confirmation}>
        <div
          className={styles.JobDetails}
          style={{
            backgroundColor: !isConfirmation ? "gray" : "green",
            color: !isConfirmation ? "gray" : "green",
            border: !isConfirmation ? "1px solid grey" : "1px solid green",
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

import Confirmation from "components/molecules/Confirmation/Confirmation";
import JobDetails from "components/molecules/JobDetails/JobDetails";
import PackagePlan from "components/molecules/PackagePlan/PackagePlan";
import Timeline from "components/molecules/Timeline/Timeline";
import GeneralLayout from "layouts/generalLayout";
import React, { useState } from "react";
import styles from "../../styles/Post-jobs.module.scss";

const PostJobsNotSigned = () => {
  const [isJobDetails, setIsJobDetails] = useState(false);
  const [isPackagePlan, setIsPackagePlan] = useState(false);
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [currentFormKey, setCurrentFormKey] = useState(0);
  const [formSteps] = useState([
    { name: "jobDetails", index: 0 },
    { name: "packagePlan", index: 1 },
    { name: "confirmation", index: 2 },
  ]);
  const renderNextForm = () => {
    setCurrentFormKey(currentFormKey + 1);
  };

  const renderPreviousForm = () => {
    setCurrentFormKey(currentFormKey - 1);
  };

  const jobDetails = () => {
    setCurrentFormKey(1)
  }
  const packagePlan = () => {
    setCurrentFormKey(2)
  }
  const confirmation = () => {
    setCurrentFormKey(3)
  }
  const postJob = () => {
    if (currentFormKey === 1) {
      return <JobDetails {...{renderPreviousForm, renderNextForm}} />;
    } else if (currentFormKey === 2) {
      return <PackagePlan {...{ renderNextForm}} />;
    } else if (currentFormKey === 3) {
      return <Confirmation />;
    } else if(currentFormKey == 0)
      return (
        <div className="w-7/12 mx-auto">
          <div className={`${styles.midSection} my-5 space-y-3`}>
            <h3 className={styles.h3}>Unroll job post</h3>
            <div className={styles.midSectionContent}>
              <p className={styles.p}>
                Paste the link of the job you posted on your company&apos;s
                website or job recruiting platforms (Linkedin, indeed, Monster
                etc)
              </p>
              <p>
                We&apos;ll fetch the details and list it on the career page as
                your new job post
              </p>
            </div>
          </div>

          <form>
            <div className={styles.inputIcons}>
              <input placeholder="Paste link here" className={styles.input} />
              <button className={styles.button}>Get details</button>
            </div>
            <p className={`mt-5 mb-10 ${styles.create}`}>
              Or you can still{" "}
              <a href=" " className={styles.createPost}>
                create your own post
              </a>
            </p>
          </form>
        </div>
      );
  };

  const toggleJobDetails = () => {
    setIsJobDetails(true);
    setIsPackagePlan(false);
    setIsConfirmation(false);
  };
  const togglePackagePlan = () => {
    setIsPackagePlan(true);
    setIsJobDetails(false);
    setIsConfirmation(false);
  };
  const toggleConfirmation = () => {
    setIsConfirmation(true);
    setIsJobDetails(false);
    setIsPackagePlan(false);
  };

  return (
    <>
      <GeneralLayout>
        <div className={`${styles.parentContainer}`}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Post a new job</h2>
            <p className={styles.subHeader}>Find your next great hire</p>
          </div>
          <div>
            <Timeline
              {...{
                isJobDetails,
                isPackagePlan,
                isConfirmation,
                setIsJobDetails,
                setIsPackagePlan,
                setIsConfirmation,
                currentFormKey,
                setCurrentFormKey,
                toggleJobDetails,
                togglePackagePlan,
                toggleConfirmation,
                postJob,
                jobDetails,
                packagePlan,
                confirmation
              }}
            />
          </div>

          {postJob()}
        </div>
      </GeneralLayout>
    </>
  );
};

export default PostJobsNotSigned;

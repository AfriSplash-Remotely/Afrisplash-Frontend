import Timeline from "components/molecules/Timeline/Timeline";
import GeneralLayout from "layouts/generalLayout";
import React from "react";
import styles from "../JobDetails/JobDetails.module.scss";

const JobDetails = () => {
  return (
    <GeneralLayout>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>Post a new job</h2>
        <p className={styles.subHeader}>Find your next great hire</p>
      </div>

      <Timeline />
      <div className={styles.midSection}>
        <h3 className={styles.h3}>Job details</h3>
        <div className={styles.midSectionContent}>
          <p className={styles.p}>
            Kindly complete the form below to post your job
          </p>
        </div>
      </div>
      <form className={styles.formContainer}>
        {/**Job Title */}
        <div>
          <label className={styles.label}>Job title</label>
          <div className={styles.formFieldWrap}>
            <input
              type="text"
              placeholder="Product designer, Product manager, Programmer etc."
            />
          </div>
        </div>

        {/**Company's name */}
        <div>
          <label className={styles.label}>Company’s name</label>
          <div className={styles.CompanyformFieldWrap}>
            <input type="text" placeholder="Attach a .png or .jpg file" />
          </div>
        </div>

        {/**Job description */}
        <div>
          <label className={`${styles.label} ${styles.required}`}>Job description</label>
          <div className={styles.textAreaContainer}>
            <textarea 
              className={styles.textArea}
              placeholder="Type your job description here"
            ></textarea>
          </div>
        </div>

        {/**Requirements */}
        <div>
          <label className={`${styles.label} ${styles.required}`}>Requirements</label>
          <div className={styles.textAreaContainer}>
            <textarea 
              className={styles.textArea}
              placeholder="Type your job requirements here"
            ></textarea>
          </div>
        </div>

        {/**Benefits */}
        <div>
          <label className={styles.label}>Benefits</label>
          <div className={styles.textAreaContainer}>
            <textarea 
              className={styles.textArea}
              placeholder="Type the job benefits here"
            ></textarea>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.backbtn}>Back</button>
          <button className={styles.nextBtn}>Next</button>
        </div>
      </form>
    </GeneralLayout>
  );
};

export default JobDetails;

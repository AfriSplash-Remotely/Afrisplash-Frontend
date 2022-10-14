import Timeline from "components/molecules/Timeline/Timeline";
import GeneralLayout from "layouts/generalLayout";
import React from "react";
import styles from "../../styles/Post-jobs.module.scss";

const PostJobsNotSigned = () => {
  return (
    <GeneralLayout>
      <div className="w-7/12 mx-auto">
        <div className={styles.headerWrapper}>
          <h2 className={styles.header}>Post a new job</h2>
          <p className={styles.subHeader}>Find your next great hire</p>
        </div>
        <div className="w-full">
        <Timeline />
        </div>

        <div className={`${styles.midSection} my-5 space-y-3`}>
          <h3 className={styles.h3}>Unroll job post</h3>
          <div className={styles.midSectionContent}>
            <p className={styles.p}>
              Paste the link of the job you posted on your company&apos;s
              website or job recruiting platforms (Linkedin, indeed, Monster
              etc)
            </p>
            <p>
              We&apos;ll fetch the details and list it on the career page as your new
              job post
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
    </GeneralLayout>
  );
};

export default PostJobsNotSigned;

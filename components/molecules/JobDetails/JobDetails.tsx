
import Button from "components/atoms/Button/Button";
import React from "react";
import styles from "../JobDetails/JobDetails.module.scss";

const JobDetails = ({ renderNextForm, renderPreviousForm }: any) => {
  return (
    <div className='mx-auto'>
    <div className={styles.jobDetailsContainer}>
      <div className={`${styles.midSection} lg:mr-56 lg:ml-96 md:mx-32 px-8 my-5 space-y-3`}>
        <h3 className={styles.h3}>Job details</h3>
        <div className={styles.midSectionContent}>
          <p className={styles.p}>
            Kindly complete the form below to post your job
          </p>
        </div>
      </div>
      <form className={`${styles.formContainer} lg:mr-56 lg:ml-96 md:mx-32 px-8 my-5 space-y-3`}>
        {/**Job Title */}
        <div className='mx-auto'>
          <label className={styles.label}>Job title</label>
          <div className={`${styles.formFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <input
            className='w-full'
              type="text"
              placeholder="Product designer, Product manager, Programmer etc."
            />
          </div>
        </div>

        {/**Comapny name */}
        <div className='mx-auto'>
          <label className={styles.label}>Company&apos;s name</label>
          <div className={`${styles.formFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <input
              className='w-full'
              type="text"
              placeholder="Type your company’s name"
            />
          </div>
        </div>

        {/**Company's logo */}
        <div>
          <label className={styles.label}>Company&apos;s logo</label>
          <div className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <input type="text" placeholder="Attach a .png or .jpg file" className='w-3/4' />
          </div>
        </div>

        {/**Job description */}
        <div>
          <label className={`${styles.label} ${styles.required}`}>
            Job description
          </label>
          <div className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <textarea
              className='w-full'
              placeholder="Type your job description here"
            ></textarea>
          </div>
        </div>

        {/**Requirements */}
        <div>
          <label className={`${styles.label} ${styles.required}`}>
            Requirements
          </label>
          <div className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <textarea
              className='w-full'
              placeholder="Type your job requirements here"
            ></textarea>
          </div>
        </div>

        {/**Benefits */}
        <div>
          <label className={styles.label}>Benefits</label>
          <div className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}>
            <textarea
              className='w-full'
              placeholder="Type the job benefits here"
            ></textarea>
          </div>
        </div>

        <div className="flex space-x-4 items-center mb-5 justify-between lg:flex lg;justify-between">
        <div className="hidden md:flex space-x-4 md:justify-between mr-96">
          <Button
            type="bordered"
            color="dark_blue"
            text="Back"
            borderColor="dark_blue"
            classes="w-36 md:w-28 lg:mr-96 md:mr-52 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
            onClick={renderPreviousForm}
          />
          <div>
          <Button
            type="filled"
            bgColor="primary_green"
            color="white"
            text="Next"
            classes="w-36 h-10 md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
            onClick={renderNextForm}
          />
          </div>
          
        </div>
      </div>
      </form>
    </div>
    </div>
  );
};

export default JobDetails;

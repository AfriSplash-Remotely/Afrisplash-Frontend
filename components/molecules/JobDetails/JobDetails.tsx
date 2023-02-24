import React, { useState } from "react";
import Select from "react-select";
import Switch from "react-switch";
import Button from "components/atoms/Button/Button";
import styles from "../JobDetails/JobDetails.module.scss";

const JobDetails = ({ renderNextForm, renderPreviousForm }: any) => {
  const [currentFormKey, setCurrentFormKey] = useState(0);

  const [formSteps] = useState([
    { name: "jobDetails", index: 0 },
    { name: "jobDetailsCont", index: 1 },
  ]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  const renderNextJobDetailsForm = () => {
    setCurrentFormKey(currentFormKey + 1);
  };

  const renderPreviousJobDetailsForm = () => {
    setCurrentFormKey(currentFormKey - 1);
  };

  const isThisForm = (formStepIndex: any) => {
    return currentFormKey === formSteps[formStepIndex].index;
  };

  const industryOptions: any = [
    { value: "", label: "Select industry" },
    { value: "health", label: "Health" },
    { value: "logistics", label: "Logistics" },
  ];

  const experienceOptions = [
    { value: "", label: "Select experience level" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const jobTypeOptions = [
    { value: "", label: "Select job type" },
    { value: "frontend", label: "Frontend developer" },
    { value: "backend", label: "Backend developer" },
    { value: "ui/ux", label: "UI/UX designer" },
  ];

  const locationOptions = [
    { value: "", label: "Select location" },
    { value: "lagos", label: "Lagos" },
    { value: "abia", label: "Abia" },
    { value: "kaduna", label: "Kaduna" },
  ];

  const salaryOptions = [
    { value: "", label: "Select salary" },
    { value: "100000", label: "100,000" },
    { value: "150000", label: "150,000" },
    { value: "200000", label: "200,000" },
  ];

  return (
    <form className="mx-auto">
      {isThisForm(0) && (
        <div className={styles.jobDetailsContainer}>
          <div
            className={`${styles.midSection} lg:mr-56 lg:ml-96 md:mx-32 px-8 my-5 space-y-3`}
          >
            <h3 className={styles.h3}>Job details</h3>
            <div className={styles.midSectionContent}>
              <p className={styles.p}>
                Kindly complete the form below to post your job
              </p>
            </div>
          </div>
          <div
            className={`${styles.formContainer} lg:mr-56 lg:ml-96 md:mx-32 px-8 my-5 space-y-3`}
          >
            {/**Job Title */}
            <div className="mx-auto">
              <label className={`text-dark_blue  ${styles.label}`}>
                Job title
              </label>
              <div
                className={`${styles.formFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <input
                  className="w-full"
                  type="text"
                  placeholder="Product designer, Product manager, Programmer etc."
                />
              </div>
            </div>

            {/**Comapny name */}
            <div className="mx-auto">
              <label className={`text-dark_blue  ${styles.label}`}>
                Company&apos;s name
              </label>
              <div
                className={`${styles.formFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <input
                  className="w-full"
                  type="text"
                  placeholder="Type your company’s name"
                />
              </div>
            </div>

            {/**Company's logo */}
            <div>
              <label className={`text-dark_blue  ${styles.label}`}>
                Company&apos;s logo
              </label>
              <div
                className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <input
                  type="text"
                  placeholder="Attach a .png or .jpg file"
                  className="w-3/4"
                />
              </div>
            </div>

            {/**Job description */}
            <div>
              <label
                className={`text-dark_blue  ${styles.label} ${styles.required}`}
              >
                Job description
              </label>
              <div
                className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <textarea
                  className="w-full"
                  placeholder="Type your job description here"
                ></textarea>
              </div>
            </div>

            {/**Requirements */}
            <div>
              <label
                className={`text-dark_blue  ${styles.label} ${styles.required}`}
              >
                Requirements
              </label>
              <div
                className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <textarea
                  className="w-full"
                  placeholder="Type your job requirements here"
                ></textarea>
              </div>
            </div>

            {/**Benefits */}
            <div>
              <label className={`text-dark_blue  ${styles.label}`}>
                Benefits
              </label>
              <div
                className={`${styles.textAreaContainer} w-full lg:w-11/12 md:w-full sm:w-11/12`}
              >
                <textarea
                  className="w-full"
                  placeholder="Type the job benefits here"
                ></textarea>
              </div>
            </div>

            <div className="flex mb-[5rem] space-x-4 items-center mb-5 justify-between lg:flex lg:justify-between">
              <div className="flex justify-between gap-[6rem] lg:gap-0 lg:flex space-x-4 lg:justify-between lg:mr-96">
                <Button
                  type="bordered"
                  color="dark_blue"
                  text="Back"
                  classes="w-36 md:w-28 lg:mr-96 md:mr-52 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
                  onClick={renderPreviousJobDetailsForm}
                />
                <div>
                  <Button
                    type="filled"
                    color="white"
                    text="Next"
                    classes="w-36 h-10 md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
                    onClick={renderNextJobDetailsForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="ml-[23%] mt-[5rem]">
        {isThisForm(1) && (
          <div className={`${styles.jobDetailsContainer}`}>
            <div>
              {/**Industry */}
              <div>
                <label className={`text-dark_blue  ${styles.label}`}>
                  Industry
                </label>
                <div
                  className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12 outline-none`}
                >
                  <Select
                    placeholder="Select industry"
                    defaultValue={selectedOption}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={industryOptions}
                    className="w-3/4"
                  />
                </div>
              </div>

              {/**Experience level */}
              <div className="mt-[2rem]">
                <label className={`text-dark_blue  ${styles.label}`}>
                  Experience level
                </label>
                <div
                  className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12 outline-none`}
                >
                  <Select
                    placeholder="Select experience level"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={experienceOptions as any}
                    className="w-3/4"
                  />
                </div>
              </div>

              {/**Job type */}
              <div className="mt-[2rem]">
                <label className={`text-dark_blue  ${styles.label}`}>
                  Job type
                </label>
                <div
                  className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12 outline-none`}
                >
                  <Select
                    placeholder="Select job type"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={jobTypeOptions as any}
                    className="w-3/4"
                  />
                </div>
              </div>

              {/**Location */}
              <div className="mt-[2rem]">
                <label className={`text-dark_blue  ${styles.label}`}>
                  Location
                </label>
                <div
                  className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12 outline-none`}
                >
                  <Select
                    placeholder="Select location"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={locationOptions as any}
                    className="w-3/4"
                  />
                </div>
              </div>

              {/**Salary */}
              <div className="mt-[2rem]">
                <label className={`text-dark_blue  ${styles.label}`}>
                  Salary
                </label>
                <div
                  className={`${styles.CompanyformFieldWrap} w-full lg:w-11/12 md:w-full sm:w-11/12 outline-none`}
                >
                  <Select
                    placeholder="Select salary"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={salaryOptions as any}
                    className="w-3/4"
                  />
                </div>
              </div>

              {/**Redirect*/}
              <div className="mt-[2rem]">
                <div className="flex items-center gap-[5rem]">
                  <label className={`text-dark_blue  ${styles.label}`}>
                    Redirect applicants to complete application on your
                    company’s job application page.
                  </label>
                  <Switch
                    onChange={triggerToggle}
                    checked={toggle}
                    className="react-switch"
                    id="material-switch"
                    height={20}
                    offColor="#D9DEDC"
                    width={48}
                    onColor="#0D5520"
                    onHandleColor="#fff"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
                <div
                  className={`${styles.formFieldWrap} py-[8px] px-[16px ] rounded border border-grey-[1px] w-full lg:w-[69%] md:w-full sm:w-11/12`}
                >
                  <input
                    type="text"
                    placeholder="Paste URL from career page."
                    className={`w-3/4 ${styles.redirectInput}`}
                  />
                </div>
              </div>

              <div className="flex mt-[4rem] mb-[5rem] space-x-4 items-center mb-5 justify-between lg:flex lg:justify-between">
                <div className="flex justify-between gap-0 lg:gap-[6rem] lg:gap-0 lg:flex space-x-4 lg:justify-between lg:mr-96">
                  <Button
                    type="bordered"
                    color="dark_blue"
                    text="Back"
                    classes="w-36 md:w-28 mr-[3rem] lg:mr-[29rem] md:mr-52 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
                    onClick={renderPreviousJobDetailsForm}
                  />
                  <div>
                    <Button
                      type="filled"
                      color="white"
                      text="Next"
                      classes="w-36 h-10 md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
                      onClick={renderNextForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default JobDetails;

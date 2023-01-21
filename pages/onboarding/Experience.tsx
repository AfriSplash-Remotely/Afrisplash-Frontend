import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";
import {
  companyNameAction,
  endDateAction,
  jobDescriptionAction,
  jobTypeAction,
  locationAction,
  positionHeldAction,
  startDateAction,
} from "store/candidateOnboarding/formSlice";
import type { RootState } from "store/store";

const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    padding: "4px 2px",
  }),
};
const locationOptions = [
  { value: "Lagos", label: "Lagos" },
  { value: "Abuja", label: "Abuja" },
  { value: "Ibadan", label: "Ibadan" },
];

const jobOptions = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "UI/UX", label: "UI/UX" },
];
const Experience = () => {
  const dispatch = useDispatch();
  const {
    companyName,
    location,
    positionHeld,
    jobType,
    startDate,
    endDate,
    jobDescription,
  } = useSelector((state: RootState) => state.form);

  const [dateStatus, setDateStatus] = useState(false);
  const [workExp, setWorkExp] = useState(false);

  const noJobExp = () => {
    setWorkExp(!workExp);
    dispatch(companyNameAction(""));
    dispatch(positionHeldAction(""));
    dispatch(locationAction(""));
    dispatch(jobTypeAction(""));
    dispatch(startDateAction(""));
    dispatch(endDateAction(""));
  };
  return (
    <div className="px-8 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">
        Add your most recent work experience
      </p>
      <form className="flex flex-wrap justify-around text-gray-500 mb-4">
        <label htmlFor="company" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Company name</p>
          <input
            type="text"
            id="company"
            className="input-el"
            placeholder="eg. Telecel Group"
            value={companyName}
            disabled={workExp}
            onChange={(e) => dispatch(companyNameAction(e.target.value))}
          />
        </label>
        <label htmlFor="position" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Position held</p>
          <input
            type="text"
            id="position"
            className="input-el"
            value={positionHeld}
            disabled={workExp}
            onChange={(e) => dispatch(positionHeldAction(e.target.value))}
          />
        </label>
        <label htmlFor="location" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Location</p>
          <Select
            id="location"
            options={locationOptions}
            styles={selectStyle}
            placeholder={location}
            isDisabled={workExp}
            onChange={(e: any) => dispatch(locationAction(e.value))}
          />
        </label>
        <label htmlFor="job-type" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Job Type</p>
          <Select
            id="job-type"
            options={jobOptions}
            styles={selectStyle}
            placeholder={jobType}
            isDisabled={workExp}
            onChange={(e: any) => dispatch(jobTypeAction(e.value))}
          />
        </label>
        <label htmlFor="company" className="basis-[100%] md:basis-[45%] mt-5">
          <p>Start date</p>
          <input
            type="date"
            id="company"
            value={startDate}
            min="1970-01-01"
            className="input-el"
            disabled={workExp}
            onChange={(e) => dispatch(startDateAction(e.target.value))}
          />
        </label>
        <label htmlFor="position" className="basis-[100%] md:basis-[45%] mt-5">
          <p>End Date</p>
          <input
            type="date"
            id="position"
            min="1970-01-01"
            value={endDate}
            className="input-el"
            disabled={dateStatus || workExp}
            onChange={(e) => dispatch(endDateAction(e.target.value))}
          />
        </label>
      </form>
      <div className="flex flex-col gap-2 md:flex-row justify-between md:px-10 md:py-2 mb-4">
        <div className="flex items-center gap-3">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            I don&rsquo;t have work experience
          </span>
          <label
            htmlFor="work-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="work-toggle"
              className="sr-only peer"
              onClick={noJobExp}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-200 dark:peer-focus:ring-green-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
        <div className="flex items-center gap-3">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            I currently work here
          </span>
          <label
            htmlFor="default-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              className="sr-only peer"
              onClick={() => {
                setDateStatus(!dateStatus);
                dispatch(endDateAction(""));
              }}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-200 dark:peer-focus:ring-green-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
      <div className="px-4 py-8">
        <label htmlFor="bio">
          <p className="block font-medium text-md text-gray-500 mb-4">
            Description
          </p>
          <textarea
            name="bio"
            id="bio"
            value={jobDescription}
            onChange={(e) => dispatch(jobDescriptionAction(e.target.value))}
            maxLength={150}
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
          <p className="text-right text-sm text-gray-500">
            {jobDescription.length}/150
          </p>
        </label>
      </div>
    </div>
  );
};

export default Experience;

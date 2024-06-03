
import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Location } from "@/components/Dashboard/recruiter/createJob/jobsData";


const jobOptions: any = [
  { value: "Full time", label: "Full time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
  { value: "Self-employed", label: "Self-employed" },
  { value: "Freelance", label: "Freelance" }
];

const Experience = ({ getDataFn }: { getDataFn?: (data: any) => void }): JSX.Element => {

  const [noJobExp, setNoJobExp] = useState(false)
  const { control, register, watch, formState: { errors } } = useForm({
    defaultValues: {
      companyName: '',
      positionHeld: '',
      location: { lable: "", value: "" },
      jobType: '',
      startDate: '',
      endDate: '',
      jobDescription: '',
    }
  });

  const handleNoExp = (e: any) => {
    if (e && e.target) {
      setNoJobExp(e.target.checked)
    }
  }

  const company_name = watch("companyName")
  const position_held = watch("positionHeld")
  const location = watch("location")
  const date_start = watch("startDate")
  const date_end = watch("endDate")
  const jdLen = watch("jobDescription")


  React.useEffect(() => {

    if (getDataFn) {
      getDataFn({
        experience: [{
          company_name,
          position_held,
          location: location?.value as string,
          job_type: "",
          date_start,
          date_end,
          description: jdLen
        }]
      })
    }

  }, [company_name, position_held, location, date_start, date_end, jdLen, getDataFn])

  return (
    <div className="px-8 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">
        Add your most recent work experience
      </p>
      <div className="flex flex-wrap -mx-2">
        {/* Company Name */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="company" className="block">Company name</label>
          <input {...register("companyName", { required: "Company name is required", disabled: noJobExp })} type="text" id="company" placeholder="eg. Telecel Group" className="input-el w-full" />
          {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
        </div>

        {/* Position Held */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="position" className="block">Position held</label>
          <input {...register("positionHeld", { required: "Position is required", disabled: noJobExp })} type="text" id="position" className="input-el w-full" />
          {errors.positionHeld && <p className="text-red-500">{errors.positionHeld.message}</p>}
        </div>

        {/* Location - Using Controller for react-select */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="location">Location</label>
          <Controller
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <Select {...field} isDisabled={noJobExp} options={Location.map((location: { label: string; value: string; }) => ({
                label: location.label,
                value: location.value
              }))} placeholder="Select location" classNamePrefix="select" />
            )}
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>

        {/* Job Type */}
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="job-type">Job Type</label>
          <Controller
            name="jobType"
            control={control}
            rules={{ required: "Job type is required" }}
            render={({ field }) => (
              <Select {...field} isDisabled={noJobExp} options={jobOptions} placeholder="Select job type" classNamePrefix="select" />
            )}
          />
          {errors.jobType && <p className="text-red-500">{errors.jobType.message}</p>}
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="company" className="basis-[100%] md:basis-[45%] mt-5">
            <p>Start date</p>
            <input
              type="date"
              id="company"
              min="1970-01-01"
              className="input-el"
              {...register("startDate", { required: "Start Date is required", disabled: noJobExp })}

            />
          </label>
          {errors.startDate && <p className="text-red-500">{errors.startDate?.message}</p>}

        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">

          <label htmlFor="position" className="basis-[100%] md:basis-[45%] mt-5">
            <p>End Date</p>
            <input
              type="date"
              id="position"
              min="1970-01-01"
              className="input-el"
              {...register("endDate", { disabled: noJobExp })}
            />
          </label>
        </div>
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
                onClick={(e) => handleNoExp(e)}
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
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-200 dark:peer-focus:ring-green-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
        <div className="w-full px-4 py-8">
          <label htmlFor="bio">
            <p className="block font-medium text-md text-gray-500 mb-4">
              Description
            </p>
            <textarea
              id="bio"
              {...register("jobDescription", { disabled: noJobExp })}
              className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
            />
            <p className="text-right text-sm text-gray-500">
              {jdLen ? jdLen.length : 0}/200
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Experience;


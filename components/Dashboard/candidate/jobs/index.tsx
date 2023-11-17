import React from "react";
import Select from "react-select";
import JobCard from "components/jobCard";
import AdminLayout from "layouts/adminLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api"
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const location = [
  { value: "lagos", label: "Lagos" },
  { value: "aba", label: "Aba" },
  { value: "enugu", label: "Enugu" },
];

const jobType = [
  { value: "fullTime", label: "Full Time" },
  { value: "remote", label: "Remote" },
  { value: "contract", label: "Contract" },
];
const experience = [
  { value: "1-3", label: "1-3yrs" },
  { value: "2-6", label: "2-6yrs" },
  { value: "6-12", label: "6-12yrs" },
];

export default function Jobs():JSX.Element{
  const { data, isLoading, isError } = useQuery(["jobs"], fetchAllJobs)
  const allJobs = data?.data
  // if (isError) {
  //   return (
  //     <div className="py-10">
  //       <p>{error?.message}</p>
  //     </div>
  //   )

  // }

  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-1	lg:gap-4">
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={location} placeholder="location" />
        </div>
        <div className="w-[47.5%]	lg:w-2/12">
          <Select options={options} placeholder="Salary" />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={jobType} placeholder="Job type" />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={options} placeholder="Job category" />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={experience} placeholder="Experience" />
        </div>
      </div>
      {isLoading ? (
        <div className="py-10">
          <p>Loading....</p>
        </div>
      ) : (<>
          <div className="my-8 font-medium">Jobs Found (<span>{data?.total || 0}</span>)</div>
          {allJobs?.map((job): JSX.Element => {
            return (
              <div key={job?._id}>
                <JobCard
                  forDashboard={true}
                  image={job?._company?.logo}
                  alt={job?._company?.name}
                  company={job?._company?.name}
                  service={job?.service}
                  employees={job?._company?.staff}
                  offer={job?.title}
                  salary={job?.salary}
                  postDate={job?.createdAt}
                  status={job?.status}
                  promoted={job?.promoted}
                  isDirectApply={job?.isDirectApply}
                />
              </div>
            );
          })}        
      </>)}
      {isError ? (<div className="py-4">
        <p>No jobs found</p>
      </div>) : null}

    </AdminLayout>
  );
};


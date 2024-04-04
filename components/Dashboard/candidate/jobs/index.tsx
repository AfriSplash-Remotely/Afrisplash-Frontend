/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import JobCard from "components/jobCard";
import AdminLayout from "layouts/adminLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs, searchJobByCompany, searchJobByLocation, searchJobByDate, searchJobByType } from "@/api-endpoints/jobs/jobs.api"
import { Location } from "../../recruiter/createJob/jobsData";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];



const jobType = [
  { value: "Onsite", label: "Onsite" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
];
const experience = [
  { value: "1-3", label: "1-3yrs" },
  { value: "2-6", label: "2-6yrs" },
  { value: "6-12", label: "6-12yrs" },
];

export default function Jobs(): JSX.Element {


  // const allJobs = data?.data
  const [current, setCurrent] = useState(0);

  const [locations, setLocations] = useState("");
  const [jobTypes, setJobTypes] = useState("");
  const [salary, setSalary] = useState("");
  const [jobCat, setJobCat] = useState("");
  const [exp, setExp] = useState("");


  // Define a function to fetch data based on current search criteria
  const fetchData = async () => {
    switch (current) {
      case 1:
        return await searchJobByLocation(locations);
      case 2:
      // Implement search by salary function
      case 3:
        return await searchJobByType(jobTypes);
      case 4:
      //   implement search by category
      case 5:
      // Implement search by experience function
      default:
        return await fetchAllJobs();
    }
  };

  // Fetch data based on current search criteria
  const { data, isLoading, isError } = useQuery(['jobs', current, locations, salary, jobTypes, jobCat, exp], fetchData);
 

  const finalData = current === 0 ? data?.data : data
 

  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-1	lg:gap-4">
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={Location} placeholder="location" onChange={(e: any) => { setCurrent(1); setLocations(e.value) }} />
        </div>
        <div className="w-[47.5%]	lg:w-2/12">
          <Select options={options} placeholder="Salary" onChange={(e: any) => { setCurrent(2); setSalary(e.value) }} />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={jobType} placeholder="Job type" onChange={(e: any) => { setCurrent(3); setJobTypes(e.value) }} />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={options} placeholder="Job category" onChange={(e: any) => { setCurrent(4); setJobCat(e.value) }} />
        </div>
        <div className="w-[47.5%]	lg:w-2/12	">
          <Select options={experience} placeholder="Experience" onChange={(e: any) => { setCurrent(5); setExp(e.value) }} />
        </div>
      </div>
      {isLoading ? (
        <div className="py-10">
          <p>Loading....</p>
        </div>
      ) : (<>
          <div className="my-8 font-medium">Jobs Found (<span>{data?.total || 0}</span>)</div>
          {/* @ts-ignore */}
          {finalData?.map((job): JSX.Element => {
         
          return (
            <div key={job?._id}>
              <JobCard
                _id={job?._id}
                forDashboard={true}
                image={job?._company?.logo}
                alt={job?._company?.name}
                company={job?._company?.name}
                service={job?.service}
                employees={job?._company?.staff}
                offer={job?.title}
                salary={`${job?.salary?.min ? job?.salary?.min : ""} - ${job.salary?.max ? job.salary?.max : ""}`}
                postDate={job?.createdAt}
                status={job?.status}
                promoted={job?.promoted}
                isDirectApply={job?.isDirectApply}
                location={job?.location}
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


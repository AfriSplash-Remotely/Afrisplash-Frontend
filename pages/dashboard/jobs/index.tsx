import React from "react";
import { NextPage } from "next";
import Select from "react-select";
import JobCard from "components/jobCard";
import AdminLayout from "layouts/adminLayout";
import { jobData } from "utils/fakeData";
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
const Jobs: NextPage = () => {
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
      <div className="my-8 font-medium">Jobs Found (45)</div>
      {jobData.flatMap((data, index): JSX.Element => {
        return (
          <div key={index}>
            <JobCard
              forDashboard={true}
              image={data.image}
              alt={"company image"}
              company={data.company}
              service={data.service}
              employees={data.employees}
              offer={data.offer}
              priceRange={data.priceRange}
              postDate={data.postDate}
              hiring={data.hiring}
              promoted={data.promoted}
              isDirectApply={data.isDirectApply}
            />
          </div>
        );
      })}
    </AdminLayout>
  );
};

export default Jobs;

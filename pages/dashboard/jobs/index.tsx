import React from "react";
import { NextPage } from "next";
import JobCard from "components/jobCard";
import AdminLayout from "layouts/adminLayout";
import { jobData } from "utils/fakeData";

const Jobs: NextPage = () => {
  return (
    <AdminLayout>
      {jobData.flatMap((data): JSX.Element => {
        return (
          <div>
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
            />
          </div>
        );
      })}
    </AdminLayout>
  );
};

export default Jobs;

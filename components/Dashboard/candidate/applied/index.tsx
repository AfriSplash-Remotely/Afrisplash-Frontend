import { useState } from "react";
import AdminLayout from "@/layouts/adminLayout";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api";
import { current } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import JobCard from "@/components/jobCard";
export default function Applied(): JSX.Element {
    const [current, setCurrent] = useState(0);
    const fetchData = async () => {

        switch (current) {
            case 1:
               
            case 2:
            // Implement search by salary function
            case 3:
               
            case 4:
            //   implement search by category
            case 5:
            // Implement search by experience function
            default:
                return await fetchAllJobs();
        }
    };
    const { data, isLoading, isError } = useQuery(['jobs', current], fetchData);
    let finalData = current === 0 ? data?.data : data
    return (
        <AdminLayout>
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center gap-6 lg:gap-8">
                    <button className="h-[48px] min-w-[162px] text-white bg-[#0D5520] rounded-[8px] flex items-center justify-center">
                        Applied jobs (5)
                    </button>
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
                                />
                            </div>
                        );
                    })}
                </>)}
                {isError ? (<div className="py-4">
                    <p>No jobs found</p>
                </div>) : null}

            </div>
        </AdminLayout> 

    )
}



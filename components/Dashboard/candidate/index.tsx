import AdminLayout from "@/layouts/adminLayout";
import { useSession } from "next-auth/react";
import JobCard from "@/components/jobCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api";


const Candidate = (): JSX.Element => {
    const { data: session } = useSession()
    const strUser = session?.user?.email
    const userName = strUser?.substring(0, strUser.indexOf('@'))

    const { data, isLoading, isError } = useQuery(["jobs"], fetchAllJobs)
    const recommendJobs = data?.data

    return (

        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-grey_4 font-medium text-lg md:font-bold md:text-2xl lg:text-2xl">Hello {userName}</h1>
                    <p className="text-dark_black text-lg mt-2 ">Recommended Jobs for you</p>
                </div>

                {isLoading ? (<div className="py-10">
                    <p>Loading....</p>
                </div>) : (
                    <>
                        <div className="mt-6">
                                {recommendJobs?.map((job) => {
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
                                                salary={job?.salary}
                                                postDate={job?.createdAt}
                                                status={job?.status}
                                                promoted={job?.promoted}
                                                isDirectApply={job?.isDirectApply}
                                            />
                                        </div>

                                    )
                                })}
                            </div>
                    </>
                )}
                {isError ? (<div className="py-4">
                    <p>No jobs found</p>
                </div>) : null}
            </div>
        </AdminLayout>
    )
}


export default Candidate
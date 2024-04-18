import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { Tab } from "@headlessui/react";
import { getJobsCreated } from "@/api-endpoints/jobs/jobs.api";
import DashboardCards from "@/components/atoms/DashboardCards/DashboardCards";
import AdminLayout from "@/layouts/adminLayout";
import CreatedJobCard from "@/components/jobCard/CreatedJobCard";

const Recruiter = ():JSX.Element => {
    const { data: session } = useSession()

    const dash = ['Created Jobs', 'Applicants']

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };

    const { data: fetchCreatedJobs } = useQuery(['createdJobs'], () => getJobsCreated(session?.user?.accessToken as string))
    const allCreatedJObs = fetchCreatedJobs?.data

    return (
        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Dashbaord</h1>
                </div>
                <div className="mt-4">
                    <DashboardCards />
                </div>
                <div className="mt-6">
                    <Tab.Group>
                        <Tab.List className='flex space-x-1 px-1 border-b-2 border-gray-100
                        '>
                            {dash.map((_dash) => {
                                return (
                                    <Tab key={_dash}
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full md:w-[20%] py-2.5 text-md font-medium leading-5 text-gray-800",
                                                "focus:outline-none",
                                                selected
                                                    ? "bg-white border-b-4 border-primary_green text-primary_green"
                                                    : "text-blue-800 hover:bg-primary_green/[0.1] hover:text-primary_green"
                                            )
                                        }
                                    >
                                        {_dash}
                                    </Tab>
                                )
                            })}
                        </Tab.List>
                        <Tab.Panels className='mt-3'>
                            <Tab.Panel>
                                {
                                    allCreatedJObs?.map((cJob) => (
                                        <CreatedJobCard
                                            key={cJob?._id}
                                            title={cJob?.title}
                                            industry={cJob?.industry}
                                            postDate={cJob?.createdAt}
                                            experience={cJob?.experience}
                                            status={cJob?.status}
                                            location={cJob?.location}
                                            promoted={cJob?.promoted}
                                            publish={cJob?.publish}
                                            expiry={cJob?.expiry}
                                            type={cJob?.type}
                                            description={cJob?.description}
                                            benefit={cJob?.benefit}
                                            requirement={cJob?.requirement}
                                            salary={`${cJob?.salary?.currency} ${cJob?.salary?.min} - ${cJob?.salary?.max}  ${cJob?.salary?.period}`}
                                        />
                                    ))
                                }
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="flex justify-center items-center py-6">
                                    <h1 className="text-4xl text-primary_green">Work in progress....</h1>
                                </div>
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Recruiter
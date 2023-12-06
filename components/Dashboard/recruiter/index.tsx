import DashboardCards from "@/components/atoms/DashboardCards/DashboardCards";
import AdminLayout from "@/layouts/adminLayout";
import { MdOutlineWorkOutline, MdOutlineBusinessCenter, MdMarkChatRead, MdGppBad } from "react-icons/md";
import { Tab } from "@headlessui/react";
import JobCard from "@/components/jobCard";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api";

const Recruiter = ():JSX.Element => {
    const cardData = [
        { title: 'Jobs', total: 30, icon: <MdOutlineBusinessCenter size='3rem' />, bgColor: '#D6ECDC' },
        { title: 'Applicants', total: 30, icon: <MdOutlineWorkOutline size='3rem' />, bgColor: '#FDF1C9' },
        { title: 'Interview Schedule', total: 30, icon: <MdMarkChatRead size='3rem' />, bgColor: '#F0FBF3' },
        { title: 'Rejected', total: 30, icon: <MdGppBad size='3rem' />, bgColor: '#f87171' },
    ]
    const dash = ['Created Jobs', 'Applicants']

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    const {data} = useQuery(["jobs"], fetchAllJobs)
    const allJobs = data?.data

    return (
        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Dashbaord</h1>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {cardData.map((card) => {
                            return <DashboardCards
                                key={card.title}
                                title={card.title}
                                icon={card.icon}
                                total={card.total}
                                bgColor={card.bgColor} />
                        })}
                    </div>
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
                                {allJobs?.map((job) => {
                                    return (
                                        <JobCard key={job?._id}
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
                                    )
                                })}
                                <div className="absolute right-12 py-2">
                                    <Link href="/dashboard/jobs" className="text-primary_green text-base underline font-semibold">View All</Link>
                                </div>

                            </Tab.Panel>
                            <Tab.Panel>
                                {allJobs?.map((job) => {
                                    return (
                                        <JobCard key={job?._id}
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
                                    )
                                })}
                                <div className="absolute right-12 py-2">
                                    <Link href="/dashboard/applied" className="text-primary_green text-base underline font-semibold">View All</Link>
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
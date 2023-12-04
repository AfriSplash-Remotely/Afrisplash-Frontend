import DashboardCards from "@/components/atoms/DashboardCards/DashboardCards";
import AdminLayout from "@/layouts/adminLayout";
import { useSession } from "next-auth/react";
import { Tab } from "@headlessui/react";
import { MdOutlineWorkOutline, MdOutlineBusinessCenter, MdMarkChatRead, MdGppBad } from "react-icons/md";
import JobCard from "@/components/jobCard";
import { jobData } from "@/utils";
import Link from "next/link";


const Candidate = (): JSX.Element => {
    const { data: session } = useSession()
    const strUser = session?.user?.email
    const userName = strUser?.substring(0, strUser.indexOf('@'))
    const cardData = [
        { title: 'Jobs', total: 30, icon: <MdOutlineBusinessCenter size='3rem' />, bgColor: '#D6ECDC' },
        { title: 'Applied', total: 30, icon: <MdOutlineWorkOutline size='3rem' />, bgColor: '#FDF1C9' },
        { title: 'Interviews', total: 30, icon: <MdMarkChatRead size='3rem' />, bgColor: '#F0FBF3' },
        { title: 'Rejected', total: 30, icon: <MdGppBad size='3rem' />, bgColor: '#f87171' },
    ]
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };

    const dash = ['Available Jobs', 'Applied Jobs']

    return (

        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Hello {userName}</h1>
                    <p className="text-grey_4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum quaerat nemo maxime.</p>
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
                                {jobData.map((job) => {
                                    return (
                                        <JobCard key={job.company}
                                            image={job.image}
                                            alt={"company image"}
                                            company={job.company}
                                            service={job.service}
                                            employees={job.employees}
                                            offer={job.offer}
                                            salary={job.priceRange}
                                            postDate={job.postDate}
                                            status={job.hiring}
                                            promoted={job.promoted}
                                        />
                                    )
                                })}
                                <div className="absolute right-12 py-2">
                                    <Link href="/dashboard/jobs" className="text-primary_green text-base underline font-semibold">View All</Link>
                                </div>

                            </Tab.Panel>
                            <Tab.Panel>
                                {jobData.map((job) => {
                                    return (
                                        <JobCard key={job.company}
                                            image={job.image}
                                            alt={"company image"}
                                            company={job.company}
                                            service={job.service}
                                            employees={job.employees}
                                            offer={job.offer}
                                            salary={job.priceRange}
                                            postDate={job.postDate}
                                            status={job.hiring}
                                            promoted={job.promoted}
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


export default Candidate
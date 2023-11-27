import AdminLayout from "@/layouts/adminLayout";
import Image from "next/image";
import { userProfile, userExperience, userEducation } from "utils";
import { AwardSvg, AvatarTick, BriefCase, ClockSvg } from "@/assets/profile";
import pic9 from "assets/images/pic9.png";


const Candidate = (): JSX.Element => {
    return (
        <AdminLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* user infor */}
                <div className="bg-white rounded-xl divide-y divide-gray-100">
                    <div className="flex flex-col px-4 pt-5 pb-6">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-20 h-20">
                                <Image
                                    src={`${pic9.src}`}
                                    fill
                                    alt=""
                                    className="w-14 h-14 rounded-full"
                                />
                                <span className="top-0 left-14 absolute rounded-full">
                                    <AvatarTick />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">{userProfile.fullName}</h3>
                                <div className="flex items-center space-x-2">
                                    <BriefCase />
                                    <p className="text-sm font-normal">{userProfile.job.title}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ClockSvg />
                                    <p className="text-sm font-normal">
                                        {userProfile.job.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around pt-6">
                            <button className="text-dark_blue px-6 py-2 rounded-2xl border border-[#D9DEDC]">
                                Message
                            </button>
                            <button className="text-white px-6 py-2 rounded-2xl bg-sunglow">
                                View Resume
                            </button>
                        </div>
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-2">Bio</h4>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <p>{userProfile.description}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-2">Contact</h4>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Email: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {userProfile.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Phone: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {userProfile.phone}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Location: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {userProfile.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-1">Skills</h4>
                        <div className="flex justify-between flex-wrap gap-4 py-4">
                            {userProfile.skills.map((skill, index) => (
                                <div
                                    className="rounded-2xl px-6 py-2 text-sm  text-primary_grey border border-primary_grey"
                                    key={index}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-1">Languages</h4>
                        <div className="flex justify-between flex-wrap gap-4 py-4">
                            {userProfile.languages.map((language, index) => (
                                <div className="" key={index}>
                                    <span className="text-[#606172] font-semibold">
                                        {language.name}
                                    </span>{" "}
                                    -{" "}
                                    <span className="text-[#9c9ca8] font-light">
                                        {language.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* user experience */}
                <div className="bg-white rounded-xl">
                    <div className="flex items-center space-x-2 p-4 pb-0">
                        <AwardSvg />
                        <h3 className="text-lg font-bold">Experience</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {userExperience.map((exp) => (
                            <div className="px-4 py-6" key={exp.title}>
                                <h4 className="text-base font-bold mb-2">{exp.duration}</h4>
                                <h5 className="text-base font-bold text-sunglow mb-2">
                                    {exp.company}
                                </h5>
                                <h6 className="text-base font-normal text-[#606172] mb-2">
                                    {exp.title}
                                </h6>
                                <div>
                                    <p>{exp.jobDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* user education */}
                <div className="bg-white rounded-xl">
                    <div className="flex items-center space-x-2 p-4 pb-0">
                        <AwardSvg />
                        <h3 className="text-lg font-bold">Education</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {userEducation.map((exp) => (
                            <div className="px-4 py-6" key={exp.title}>
                                <h4 className="text-base font-bold mb-2">{exp.duration}</h4>
                                <h5 className="text-base font-bold text-sunglow mb-2">
                                    {exp.company}
                                </h5>
                                <h6 className="text-base font-normal text-[#606172] mb-2">
                                    {exp.title}
                                </h6>
                                <div>
                                    <p>{exp.jobDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}


export default Candidate
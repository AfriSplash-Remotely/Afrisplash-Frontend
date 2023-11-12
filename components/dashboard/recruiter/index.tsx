import RecruiterProfileLayout from "@/layouts/recruiterProfileLayout";
import { NextPage } from "next";
import Image from "next/image";
import pic9 from "assets/images/pic9.png";
import { AwardSvg, AvatarTick, BriefCase, ClockSvg, Pencil } from "@/assets/profile";
import { userProfile, userExperience, userEducation } from "utils";
import ToggleButton from "@/components/atoms/ToggleButton";
import Tooltip from "@/components/atoms/Tooltip"
import { MdOutlineInfo } from "react-icons/md";




const Recruiter: NextPage = () => {
    return (
        <RecruiterProfileLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* user infor */}
                <div className="bg-white rounded-xl divide-y divide-gray-100">
                    <div className="flex flex-col px-4 pt-5 pb-6">
                        <div className="flex items-center space-x-4 relative">
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
                            <div className="top-0 right-0 absolute border border-grey_2 rounded-md p-1 cursor-pointer" >
                                <Pencil />
                            </div>
                        </div>

                    </div>
                    <div className="px-4 py-4 flex justify-between items-center">
                        <h6 className="text-base font-normal text-[#606172] mb-2">Actively hiring</h6>
                        <ToggleButton onChange={console.log} />
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-2">Bio</h4>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <p>{userProfile.description}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 relative">
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
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <h6 className="text-[#606172] font-semibold">Private mode</h6>
                                    <Tooltip
                                        message="Private mode hides your contact details from candidates so they can’t reach you until you turn it off"
                                        title={"Private mode"}>
                                        <MdOutlineInfo />
                                    </Tooltip>
                                </div>

                                <ToggleButton onChange={console.log} />
                            </div>
                        </div>
                        <div className="top-4 right-4 absolute border border-grey_2 rounded-md p-1 cursor-pointer" >
                            <Pencil />
                        </div>

                    </div>

                    <div className="px-4 py-6">
                        <div className="flex justify-between items-center">
                            <h4 className="text-base font-bold mb-1">Skills hiring for</h4>
                            <div className="border border-grey_2 rounded-md p-1 cursor-pointer" >
                                <Pencil />
                            </div>

                        </div>
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
                        <div className="flex justify-between items-center">
                            <h4 className="text-base font-bold mb-1">Languages</h4>
                            <div className="border border-grey_2 rounded-md p-1 cursor-pointer" >
                                <Pencil />
                            </div>

                        </div>
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
                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-1">Profile is  60% complete</h4>
                        <input type="range" className="w-full mt-2 accent-primary_green" />

                    </div>
                </div>
                {/* user experience */}
                <div className="bg-white rounded-xl relative">
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
                    <div className="top-4 right-4 absolute border border-grey_2 rounded-md p-1 cursor-pointer" >
                        <Pencil />
                    </div>
                </div>
                {/* user education */}
                <div className="bg-white rounded-xl relative">
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
                    <div className="top-4 right-4 absolute border border-grey_2 rounded-md p-1 cursor-pointer" >
                        <Pencil />
                    </div>
                </div>
            </div>
        </RecruiterProfileLayout>
    )
}


export default Recruiter
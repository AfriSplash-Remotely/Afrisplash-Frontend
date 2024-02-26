import React from "react";
import RecruiterProfileLayout from "@/layouts/recruiterProfileLayout";
import Image from "next/image";
import pic9 from "assets/images/pic9.png";
import { AvatarTick, BriefCase, ClockSvg, Pencil } from "@/assets/profile";
import ToggleButton from "@/components/atoms/ToggleButton";
import Tooltip from "@/components/atoms/Tooltip";
import { MdOutlineInfo } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getRecruiterProfile } from "@/api-endpoints/user-profile/user-profile.api";

const Recruiter = (): JSX.Element => {
    const { data: session } = useSession();
    const jwtToken = session && session?.user?.accessToken as string;

    const { data } = useQuery(["recruiterProfile"], async () => {
        const response = await getRecruiterProfile(jwtToken as string)
        return response.data[0];
    });

    return (
        <RecruiterProfileLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* user infor */}
                <div className="bg-white rounded-xl divide-y divide-gray-100">
                    <div className="flex flex-col px-4 pt-5 pb-6">
                        <div className="flex items-center space-x-4 relative">
                            <div className="relative w-20 h-20">
                                <Image
                                    src={`${data?.profile_image ?? pic9.src}`}
                                    fill
                                    alt=""
                                    className="w-14 h-14 rounded-full"
                                />
                                <span className="top-0 left-14 absolute rounded-full">
                                    <AvatarTick />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">{data?.first_name} {data?.last_name}</h3>
                                <div className="flex items-center space-x-2">
                                    <BriefCase />
                                    <p className="text-sm font-normal">{data?.role}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ClockSvg />
                                    <p className="text-sm font-normal">
                                        {data?.availability[0]}
                                    </p>
                                </div>
                            </div>
                            <div className="top-0 right-0 absolute border border-grey_2 rounded-md p-1 cursor-pointer">
                                <Pencil />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 flex justify-between items-center">
                        <h6 className="text-base font-normal text-[#606172] mb-2">
                            Actively hiring
                        </h6>
                        <ToggleButton onChange={console.log} isChecked={data?.activelyHiring ?? false} />
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-2">Bio</h4>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <p>{data?.bio}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 relative">
                        <h4 className="text-base font-bold mb-2">Contact</h4>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Email: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {data?.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Phone: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {data?.phone_number}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Location: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">
                                    {data?.location}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <h6 className="text-[#606172] font-semibold">Private mode</h6>
                                    <Tooltip
                                        message="Private mode hides your contact details from candidates so they can’t reach you until you turn it off"
                                        title={"Private mode"}
                                    >
                                        <MdOutlineInfo />
                                    </Tooltip>
                                </div>

                                <ToggleButton onChange={console.log} isChecked={data?.privateMode ?? false} />
                            </div>
                        </div>
                        <div className="top-4 right-4 absolute border border-grey_2 rounded-md p-1 cursor-pointer">
                            <Pencil />
                        </div>
                    </div>
                </div>
            </div>
        </RecruiterProfileLayout>
    );
};

export default Recruiter;

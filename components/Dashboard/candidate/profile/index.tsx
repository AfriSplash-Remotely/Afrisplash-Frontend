
import { useState } from "react";
import AdminLayout from "@/layouts/adminLayout";
import Image from "next/image";
import { AwardSvg, AvatarTick, BriefCase, ClockSvg } from "@/assets/profile";
import pic9 from "assets/images/pic9.png";
import { useSession } from "next-auth/react";
import { addEducation, addExperience, getCandidateProfile } from "@/api-endpoints/user-profile/user-profile.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import AddEducationModal from "./add-education-modal";
import AddExperienceModal from "./add-experience-modal";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const Candidate = (): JSX.Element => {
    const [openEducation, setOpenEducation] = useState<boolean>(false);
    const [openExperience, setOpenExperience] = useState<boolean>(false);
    const { data: session } = useSession();
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const jwtToken = session?.user?.accessToken as string;

    const { data,refetch } = useQuery(["candidateProfile"], async () => {
        const response = await getCandidateProfile(jwtToken as string)
    
        return response.data[0];
    });

   

    const { mutate: updateEducationMutation, isLoading: educationLoading } = useMutation({
        mutationFn: (body: object[]) => addEducation(body, session?.user?.accessToken as string),
        onSuccess: (data) => {
            toast.success("education updated successfully ");
            setEducationData([]);
            setOpenEducation(false);
            refetch();
        
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleAddEduction = () => { 
            
        const body = educationData;
        updateEducationMutation(body);
    }
    const { mutate: updateExperienceMutation, isLoading: experienceLoading } = useMutation({
        mutationFn: (body: object[]) => addExperience(body, session?.user?.accessToken as string),
        onSuccess: (data) => {
            toast.success("experience updated successfully ");
            setExperienceData([]);
            setOpenExperience(false);
            refetch();
        
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleAddExperience = () => { 
            
        const body = experienceData;
      
        updateExperienceMutation(body);
    }

  
 
    return (
        <AdminLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* user info */}
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
                                <h3 className="text-lg font-bold">{data?.first_name} {data?.last_name}</h3>
                                <div className="flex items-center space-x-2">
                                    <BriefCase />
                                    <p className="text-sm font-normal">{data?.role}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ClockSvg />
                                    <p className="text-sm font-normal">
                                        {data?.availability?.[0]}
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
                            <p>{data?.bio}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6">
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
                        </div>
                    </div>

                    <div className="px-4 py-6">
                        <h4 className="text-base font-bold mb-1">Skills</h4>
                        <div className="flex flex-wrap gap-4 py-4">
                            {data?.skills.map((skill, index) => (
                                <div
                                    className="rounded-2xl px-6 py-2 text-sm  text-primary_grey border border-primary_grey"
                                    key={index}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {data?.languages && (
                        <div className="px-4 py-6">
                            <h4 className="text-base font-bold mb-1">Languages</h4>
                            <div className="flex justify-between flex-wrap gap-4 py-4">
                                {data?.languages.map((language, index) => (
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
                    )}
                </div>
                {/* user experience */}
                {data?.experience && (
                    <div className="bg-white rounded-xl">
                        <div className="flex items-center space-x-2 p-4 pb-0">
                            <AwardSvg />
                            <h3 className="text-lg font-bold">Experience</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {data?.experience.map((exp, index) => {
                                const startDate = new Date(exp.date_start);
                                const endDate = new Date(exp.date_end);

                                // Extracting years
                                const startYear = startDate.getFullYear();
                                const endYear = endDate.getFullYear();

                                return (
                                    <div className="px-4 py-6" key={index}>
                                        <h4 className="text-base font-bold mb-2">{startYear} - {endYear}</h4>
                                        <h5 className="text-base font-bold text-sunglow mb-2">
                                            {exp.company_name}
                                        </h5>
                                        <h6 className="text-base font-normal text-[#606172] mb-2">
                                            {exp.position_held}
                                        </h6>
                                        <div>
                                            <p>{exp.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-full flex justify-center items-center mt-6 ">
                            <button className="h-[56px] rounded-[16px] min-w-[204px] cursor-pointer border border-[#D9DEDC] text-[#1C1D36] font-semibold" onClick={() => setOpenExperience(true)}>
                                <span className="text-[#0D5520]">+</span>
                                Add Experience
                            </button>
                        </div>
                    </div>
                )}

                {/* user education */}
                {data?.education && (
                    <div className="bg-white rounded-xl">
                        <div className="flex items-center space-x-2 p-4 pb-0">
                            <AwardSvg />
                            <h3 className="text-lg font-bold">Education</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {data.education.map((edu, index) => {
                                const startDate = new Date(edu.date_start);
                                const endDate = new Date(edu.date_end);

                                // Extracting years
                                const startYear = startDate.getFullYear();
                                const endYear = endDate.getFullYear();

                                return (
                                    <div className="px-4 py-6" key={index}>
                                        <h4 className="text-base font-bold mb-2">{startYear} - {endYear}</h4>
                                        <h5 className="text-base font-bold text-sunglow mb-2">
                                            {edu.institution_name}
                                        </h5>
                                        <h6 className="text-base font-normal text-[#606172] mb-2">
                                            {edu.field_of_study}
                                        </h6>
                                        <div>
                                            <p>{edu.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-full flex justify-center items-center mt-6 ">
                            <button className="h-[56px] rounded-[16px] min-w-[204px] cursor-pointer border border-[#D9DEDC] text-[#1C1D36] font-semibold" onClick={() => setOpenEducation(true)}>
                                <span className="text-[#0D5520]">+</span>
                                Add Education
</button>
                        </div>
                    </div>
                )}

            </div>
       <AddEducationModal open={openEducation} setOpen={setOpenEducation} onClick={ handleAddEduction}  setData={setEducationData} loading={educationLoading}   />
       <AddExperienceModal open={openExperience} setOpen={setOpenExperience} onClick={ handleAddExperience}  setData={setExperienceData} loading={experienceLoading}   />
        </AdminLayout>
    )
}


export default Candidate
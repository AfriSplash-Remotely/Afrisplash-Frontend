import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MdOutlineInfo } from "react-icons/md";
import RecruiterProfileLayout from "@/layouts/recruiterProfileLayout";
import ToggleButton from "@/components/atoms/ToggleButton";
import Tooltip from "@/components/atoms/Tooltip";
import { addEducationRecruiter, addExperienceRecruiter, addLanguageRecruiter, addSkillRecruiter, editBioRecruiter, editContactDetailsRecruiter, getRecruiterProfile, removeEducationRecruiter, removeExperienceRecruiter, removeLanguageRecruiter, updateHiringStatusRecruiter, updatePrivacyStatusRecruiter, updateUserRecruiter } from "@/api-endpoints/recruiter-profile/recruiter-profile.api";
import { AvatarTick, AwardSvg, BriefCase, ClockSvg, Pencil } from "@/assets/profile";
import pic9 from "assets/images/pic9.png";
import { useSession } from "next-auth/react";
import { contactProps } from "../../candidate/profile";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import LoadingComponent from "@/components/atoms/Loading/loading-component";
import { FiDelete } from "react-icons/fi";
import AddEducationModal from "../../candidate/profile/add-education-modal";
import AddExperienceModal from "../../candidate/profile/add-experience-modal";
import AddLanguage from "../../candidate/profile/add-language-modal";
import EditBio from "../../candidate/profile/edit-bio-modal";
import EditContactDetails from "../../candidate/profile/edit-contact-details.modal";
import UpdateSkillModal from "../../candidate/profile/update-skills-modal";
import editIcon from "../../../../assets/general/edit-icon.svg";
import UpdateProfileModal from "../../candidate/profile/update-profile";
const Recruiter = (): JSX.Element => {
    const { data,refetch } = useQuery(["recruiterProfile"], async () => {
        const response = await getRecruiterProfile();
        return response.data[0];
    });
    const [openEducation, setOpenEducation] = useState<boolean>(false);
    const [openExperience, setOpenExperience] = useState<boolean>(false);
    const [openContact, setOpenContact] = useState<boolean>(false);
    const [openBio, setOpenBio] = useState<boolean>(false);
    const [openLanguage, setOpenLanguage] = useState<boolean>(false);
    const [openSkills, setOpenSkills] = useState<boolean>(false);
    const { data: session } = useSession();
    const [educationData, setEducationData] = useState<object[]>([]);
    const [bio, setBio] = useState<string>("");
    const [experienceData, setExperienceData] = useState<object[]>([]);
    const [contactData, setContactData] = useState<contactProps>({ email: "", phone: "", location: "" });
    const [bioData, setBioData] = useState([]);
    const [skillData, setSkillsData] = useState<any>([]);
    const [langData, setLangData] = useState<any>([]);
    const [profileData, setProfileData] = useState<any>({});
    const [openProfile, setOpenProfile] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            setBio(data?.bio);
            setContactData({
                email: data?.email,
                phone: data?.phone_number,
                location: data?.location
            });
            setSkillsData(data?.skills);
        }
    }, [data?.skills, data?.email, data?.phone_number, data?.location, data?.bio, data, openSkills]);





    const { mutate: updateEducationMutation, isLoading: educationLoading } = useMutation({
        mutationFn: (body: object[]) => addEducationRecruiter(body),
        onSuccess: () => {
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
        mutationFn: (body: object[]) => addExperienceRecruiter(body),
        onSuccess: () => {
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
    const { mutate: updateContactMutation, isLoading: contactLoading } = useMutation({
        mutationFn: (body: object) => editContactDetailsRecruiter(body),
        onSuccess: () => {
            toast.success("contact updated successfully ");
            setContactData({ location: "", phone: "", email: "" });
            setOpenContact(false);
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleEditContact = () => {
        const body = contactData;
        updateContactMutation(body);
    }
    const { mutate: updateBioMutation, isLoading: bioLoading } = useMutation({
        mutationFn: (body: object[]) => editBioRecruiter(body),
        onSuccess: () => {
            toast.success("contact updated successfully ");
            setBioData([]);
            setOpenBio(false);
            refetch();
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleEditBio = () => {
        const body = bioData;
        updateBioMutation(body);
    }
    const { mutate: updateSkillMutation } = useMutation({
        mutationFn: (body: object[]) => addSkillRecruiter(body),
        onSuccess: () => {
            toast.success("contact updated successfully ");
            setSkillsData([]);
            setOpenSkills(false);
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleAddSkill = () => {
        const body = skillData;
        updateSkillMutation(body);
    }
    // Start
    const { mutate: updateLanguageMutation, isLoading: langLoading } = useMutation({
        mutationFn: (body: object[]) => addLanguageRecruiter(body),
        onSuccess: () => {
            toast.success("language added successfully ");
            setLangData([]);
            setOpenLanguage(false);
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleAddLanguage = () => {

        const body = langData;

        updateLanguageMutation(body);
    }
    // END OF THE EDU
    const [isHiring, setIsHiring] = useState<boolean | any>(false);
    const [isPrivate, setIsPrivate] = useState<boolean | any>(false);
    const prevIsPrivateRef = useRef<boolean>(isPrivate);
    const prevIsHiringRef = useRef<boolean>(isHiring);
    // Start
    const { mutate: updateHiringMutation } = useMutation({
        mutationFn: (body: {hiringStatus:boolean}) => updateHiringStatusRecruiter(body),
        onSuccess: () => {
            toast.success("Hiring status updated successfully ");
            console.log( "I am called A");
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleUpdateHiring = () => {

        const body = {hiringStatus:isHiring};

        updateHiringMutation(body);
    }
 
    useEffect(() => {
        // Only make the API call if the state has changed
        if (prevIsHiringRef.current !== isHiring) {
            handleUpdateHiring();
            prevIsHiringRef.current = isHiring; // Update the previous state
        }
    }, [isHiring]);
 
    // END OF THE EDU
    const { mutate: updatePrivacyMutation } = useMutation({
        mutationFn: (body: {privateMode:boolean}) => updatePrivacyStatusRecruiter(body),
        onSuccess: () => {
            toast.success("Privacy status updated successfully ");
       
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleUpdatePrivacy = () => {

        const body = {privateMode:isPrivate};

        updatePrivacyMutation(body);
    }
    
    useEffect(() => {
        // Only make the API call if the state has changed
        if (prevIsPrivateRef.current !== isPrivate) {
            handleUpdatePrivacy();
            prevIsPrivateRef.current = isPrivate; // Update the previous state
        }
    }, [isPrivate]);
    // useEffect(() => {
    //     handleUpdateHiring();
    // }, [isHiring])
    
    // END OF THE EDU
    const { mutate: removeLanguageMutation, isLoading: removelangLoading } = useMutation({
        mutationFn: (id: string) => removeLanguageRecruiter(id as string),
        onSuccess: () => {
            toast.success("Language removed successfully ");
            refetch();
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleRemoveLanguage = (id: string) => {
        removeLanguageMutation(id);
    }
    const { mutate: removeExperienceMutation, isLoading: removeExperienceLoading } = useMutation({
        mutationFn: (id: string) => removeExperienceRecruiter(id as string),
        onSuccess: () => {
            toast.success("Experience removed successfully ");
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleRemoveExperience = (id: string) => {
        removeExperienceMutation(id);
    }
    const { mutate: removeEducationMutation, isLoading: removeEducationLoading } = useMutation({
        mutationFn: (id: string) => removeEducationRecruiter(id as string),
        onSuccess: () => {
            toast.success("Education removed successfully ");
            refetch();
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleRemoveEducation = (id: string) => {
        removeEducationMutation(id);
    }

    // start
    const { mutate: updateProfileMutation, isLoading: profileLoading } = useMutation({
        mutationFn: (body: object) => updateUserRecruiter(body),
        onSuccess: () => {
            toast.success("profile updated successfully ");
            setProfileData({});
            setOpenProfile(false);
            refetch();

        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleUpdateProfile = () => {

        const body = profileData;
        updateProfileMutation(body);
    }
    // end


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
                                    alt="image"
                                    className="w-14 h-14 rounded-full aspect-square object-cover cursor-pointer"
                                    onClick={() => setOpenProfile(true)}
                                />
                                <span className="top-0 left-14 absolute rounded-full">
                                    <AvatarTick />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">
                                    {data?.first_name} {data?.last_name}
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <BriefCase />
                                    <p className="text-sm font-normal">{data?.role}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ClockSvg />
                                    <p className="text-sm font-normal">
                                        {data?.availability ?? ""}
                                    </p>
                                </div>
                            </div>
                            <div className="top-0 right-0 absolute border border-grey_2 rounded-md p-1 cursor-pointer" onClick={() => setOpenProfile(true)}>
                                <Pencil />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 flex justify-between items-center">
                        <h6 className="text-base font-normal text-[#606172] mb-2">
                            Actively hiring
                        </h6>
                        <ToggleButton
                            onChange={() => setIsHiring(!data?.activelyHiring)}
                            isChecked={data?.activelyHiring ?? false}
                        />
                    </div>

                    <div className="px-4 py-6">
                        <div className="w-full flex items-center justify-between">

                            <h4 className="text-base font-bold mb-2">Bio</h4>
                            <span onClick={() => setOpenBio(true)}>
                                <Image src={editIcon} alt="edit-icon" />
                            </span>
                        </div>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <p>{data?.bio}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 relative">
                        <div className="w-full flex items-center justify-between">

                            <h4 className="text-base font-bold mb-2">Contact</h4>
                            <span onClick={() => setOpenContact(true)}>
                                <Image src={editIcon} alt="edit-icon" />
                            </span>
                        </div>
                        <div className="flex flex-col justify-between py-4 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[#606172] font-semibold">Email: </span>{" "}
                                <span className="text-[#9c9ca8] font-light">{data?.email}</span>
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

                                <ToggleButton
                                  
                                    isChecked={data?.privateMode ?? false}
                                    onChange={() => setIsPrivate(!data?.privateMode)}
                                  
                                />
                            </div>
                        </div>
                      
                    </div>
                    <div className="px-4 py-6">
                        <div className="w-full flex items-center justify-between">

                            <h4 className="text-base font-bold mb-1">Skills</h4>
                            <span onClick={() => setOpenSkills(true)}>
                                <Image src={editIcon} alt="edit-icon" />
                            </span>
                        </div>
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

                  
                </div>
                {/* user experience */}
                <div className="bg-white rounded-xl">
                    <div className="flex items-center space-x-2 p-4 pb-0">
                        <AwardSvg />
                        <h3 className="text-lg font-bold">Experience</h3>
                    </div>
                    {
                        removeExperienceLoading ? (
                            <div className="mt-6 px-4">
                                <LoadingComponent />
                            </div>
                        ) : (
                            <>
                                {data?.experience && (
                                    <div className="divide-y divide-gray-100">
                                        {data?.experience.map((exp, index) => {
                                            const startDate = new Date(exp.date_start);
                                            const endDate = new Date(exp.date_end);

                                            // Extracting years
                                            const startYear = startDate.getFullYear();
                                            const endYear = exp.date_end === "till-date" ? "till Date" : endDate.getFullYear();

                                            return (
                                                <div className="px-4 py-6" key={index}>
                                                    <div className="flex items-center justify-between">

                                                        <h4 className="text-base font-bold mb-2">{startYear} - {endYear}</h4>
                                                        <span className="cursor-pointer" onClick={() => handleRemoveExperience(exp?._id)}>
                                                            <FiDelete className="text-[#666]" />
                                                        </span>
                                                    </div>
                                                    <h5 className="text-base font-bold text-sunglow mb-2 capitalize">
                                                        {exp.company_name}
                                                    </h5>
                                                    <h6 className="text-base font-normal text-[#606172] mb-2 capitalize">
                                                        {exp.position_held}
                                                    </h6>
                                                    <div>
                                                        <p>{exp.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </>
                        )
                    }


                    <div className="w-full flex justify-center items-center mt-6 mb-8 ">
                        <button className="h-[56px] rounded-[16px] min-w-[204px] cursor-pointer border border-[#D9DEDC] text-[#1C1D36] font-semibold" onClick={() => setOpenExperience(true)}>
                            <span className="text-[#0D5520]">+</span>
                            Add Experience
                        </button>
                    </div>
                </div>

                {/* user education */}
                <div className="bg-white rounded-xl">
                    <div className="flex items-center space-x-2 p-4 pb-0">
                        <AwardSvg />
                        <h3 className="text-lg font-bold">Education</h3>
                    </div>
                    {
                        removeEducationLoading ? (
                            <div className="mt-6 px-4">
                                <LoadingComponent />
                            </div>
                        ) : (
                            <>
                                {data?.education && (
                                    <div className="divide-y divide-gray-100">
                                        {data.education.map((edu, index) => {
                                            const startDate = new Date(edu.date_start);
                                            const endDate = new Date(edu.date_end);

                                            // Extracting years
                                            const startYear = startDate.getFullYear();
                                            const endYear = endDate.getFullYear();

                                            return (
                                                <div className="px-4 py-6" key={index}>
                                                    <div className="flex justify-between items-center">

                                                        <h4 className="text-base font-bold mb-2">{startYear} - {endYear}</h4>
                                                        <span className="cursor-pointer" onClick={() => handleRemoveEducation(edu?._id)}>
                                                            <FiDelete className="text-[#666]" />
                                                        </span>
                                                    </div>
                                                    <h5 className="text-base font-bold text-sunglow mb-2 capitalize">
                                                        {edu.institution_name}
                                                    </h5>
                                                    <h6 className="text-base font-normal text-[#606172] mb-2 capitalize">
                                                        {edu.field_of_study}
                                                    </h6>
                                                    <div>
                                                        <p>{edu.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </>
                        )
                    }

                    <div className="w-full flex justify-center items-center mt-6 mb-8 ">
                        <button className="h-[56px] rounded-[16px] min-w-[204px] cursor-pointer border border-[#D9DEDC] text-[#1C1D36] font-semibold" onClick={() => setOpenEducation(true)}>
                            <span className="text-[#0D5520]">+</span>
                            Add Education
                        </button>
                    </div>
                </div>

            </div>
            <AddEducationModal open={openEducation} setOpen={setOpenEducation} onClick={handleAddEduction} setData={setEducationData} loading={educationLoading} />
            <AddExperienceModal open={openExperience} setOpen={setOpenExperience} onClick={handleAddExperience} setData={setExperienceData} loading={experienceLoading} />
            <EditContactDetails data={contactData} open={openContact} setOpen={setOpenContact} onClick={handleEditContact} setData={setContactData} loading={contactLoading} />
            <EditBio bio={bio} setBio={setBio} open={openBio} setOpen={setOpenBio} onClick={handleEditBio} setData={setBioData} loading={bioLoading} />
            <UpdateSkillModal data={skillData} open={openSkills} setOpen={setOpenSkills} onClick={handleAddSkill} setData={setSkillsData} loading={bioLoading} />
            <AddLanguage open={openLanguage} setOpen={setOpenLanguage} onClick={handleAddLanguage} setData={setLangData} loading={langLoading} />
            <UpdateProfileModal userData={data} open={openProfile} setOpen={setOpenProfile} onClick={handleUpdateProfile} setData={setProfileData} loading={profileLoading} />
        </RecruiterProfileLayout>
    );
};

export default Recruiter;

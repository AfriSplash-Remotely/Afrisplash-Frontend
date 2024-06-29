import { useState } from 'react';
import Image from "next/image";
import Select from "react-select";
import { Controller, useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { createJob } from '@/api-endpoints/jobs/jobs.api';
import AdminLayout from '@/layouts/adminLayout';
import { CreateCompanySchema, StepOne, } from '@/schema/company.schema';
import Confirmation from '../createJob/confirmation';
import { selectStyle } from '@/utils/helper';
import { jobIndustry, Location } from '../createJob/jobsData';
import unchecked from "assets/candidateOnboarding/unchecked.svg";
import checked from "assets/candidateOnboarding/checked.svg";
import SocialInput from './social-input';
import { createCompany, verifyCompany } from '@/api-endpoints/company/company.api';
import LoadingIcon from '@/components/atoms/LoaingIcon';
import { singleCompanyResp } from '@/api-endpoints/company/company.interfaces';
import { AxiosError } from 'axios';

interface Social {
    platform: string;
    handle: string;
    link: string;
}
export default function CreateCompany(): JSX.Element {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [companyDetails, setCompanyDetails] = useState<singleCompanyResp>()
    const [socials, setSocials] = useState<Social[]>([
        { platform: '', handle: '', link: '' }
    ]);
    const [imageUrl, setImageUrl] = useState<string>("");
    const handleUpload = (info: any) => {
        setImageUrl(info.secure_url);
    };
    const handleInputChange = (index: number, field: string, value: string) => {
        const newSocials = socials.map((social, i) =>
            i === index ? { ...social, [field]: value } : social
        );
        setSocials(newSocials);
    };

    const addSocial = () => {
        setSocials([...socials, { platform: '', handle: '', link: '' }]);
    };
    const createJobStep = [
        { id: 1, name: "Company Details" },
        { id: 2, name: 'Verify Company' },
      
    ]
    const [formOneValues, setformOneValues] = useState<StepOne | null>(null)
   


    const form1 = useForm<StepOne>({
        resolver: yupResolver(CreateCompanySchema.stepOne)
    })


    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleNext = async (result: StepOne ) => {
        const nextStep = currentStep + 1

        if (currentStep === 1) {
            setformOneValues(result as StepOne)
            setCurrentStep(nextStep)
        } else {
          
            setCurrentStep(nextStep)
        }
    }

    const { mutate, isLoading,data } = useMutation({
        mutationFn: (payload: object) => createCompany(payload),
        onSuccess: () => {
         
            setCurrentStep(2);
            toast.success("Company created successfully")
        },
        onError: () => {
            toast.error('An error occurred')

        }
    })
    const { mutate: verifyCompanyMutation, isLoading: verifyLoading } = useMutation({
        mutationFn: (verifyPayload:any) => verifyCompany( verifyPayload,),
        onSuccess: (data) => {
            toast.success("company verified  successfully ");
            setCurrentStep(3);
        },
        onError: (error: AxiosError<{ error: any }>) => {
            toast.error(error?.response?.data?.error);
        }
    })

    const handleVerifyCompany = (idx: string | any) => {

        const id = {id:idx};
        verifyCompanyMutation(id);
    }

    console.log({formOneValues})

    const onSubmit = (data: StepOne, e: any) => {
        e?.preventDefault();
        // Note that the otherData are details that is not tracked on the ui but the backend requires it for us to be able to create a Job 
        const otherData = {
           
            "thumbnail": "https://firebasestorage.googleapis.com/v0/b/mylangcoach-1e26a.appspot.com/o/files%2Fbukk.jpg?alt=media&token=e29bf824-56e8-4c22-a578-7d617ba15cfb",
            "logo": "https://firebasestorage.googleapis.com/v0/b/mylangcoach-1e26a.appspot.com/o/files%2Fbukk.jpg?alt=media&token=e29bf824-56e8-4c22-a578-7d617ba15cfb",
            market: ["Technology"],
            socials:socials
            
        }
        const completedSteps = { ...data, ...otherData }
   
        mutate(completedSteps);
    }

    return (
        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-2xl">Company</h1>
                    <p className='text-grey_4 font-medium text-lg'>Create a new company</p>
                </div>
            </div>

            <div className='mt-4'>
                <div className='mb-8'>
                    <div className='grid grid-cols-4 gap-2 mb-10 sm:mb-16 md:mb-10'>
                        {createJobStep.map((jobStep) => (
                            <div className='flex flex-col flex-1 flex-shrink-0 basis-40' key={jobStep.id}>
                                <div className={`h-1 rounded-full ${jobStep.id <= currentStep ? `bg-green-900` : `bg-gray-400`} mb-1.5`}>
                                    <div className='flex mt-2 items-center'>
                                        <div className='flex-shrink-0'>
                                            {jobStep.id <= currentStep ? (
                                                <Image src={checked} width={15} height={15} alt="icon" />
                                            ) : (
                                                <Image src={unchecked} width={15} height={15} alt="icon" />
                                            )}
                                        </div>
                                        <p className='text-sm font-medium text-gray-600 ml-1'>{jobStep.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Details */}
            {currentStep === 1 && (

                <>
                    <div className='pr-24'>
                        <div className='py-6'>
                            <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl"> Your Company  Details</h1>
                            <p className='text-dark_black font-medium text-base mt-2'>Please  complete the form below to create a company
                            </p>
                        </div>
                        <form  className='text-gray-500 font-medium mb-4 '>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="title">Company Name</label>
                                <input type='text' id='title' className='input-el mt-2'
                                    placeholder='Enter company name.'
                                    {...form1.register('name')}
                                />
                                {form1.formState.errors.name &&
                                    <p className='text-red-800'>{form1.formState.errors?.name?.message}</p>}
                            </div>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="industry">Job Industry</label>
                                <Controller
                                    name='industry'
                                    control={form1.control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            id="industry"
                                            options={jobIndustry}
                                            styles={selectStyle}
                                            onChange={(e: any) => field.onChange(e?.value)}
                                            value={jobIndustry.find((e) => e.value === field.value)}
                                            ref={field.ref}
                                            placeholder='Select Job Industy' />
                                    )}

                                />
                                {form1.formState.errors.industry &&
                                    <p className='text-red-800'>{form1.formState.errors?.industry?.message}</p>
                                }
                            </div>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="location">Job Location</label>
                                <Controller
                                    name='location'
                                    control={form1.control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            id="location"
                                            options={Location}
                                            styles={selectStyle}
                                            onChange={(e: any) => field.onChange(e?.value)}
                                            value={Location.find((e: { value: string; }) => e.value === field.value)}
                                            ref={field.ref}
                                            placeholder='Select location or remote-based' />

                                    )}

                                />
                                {form1.formState.errors.location &&
                                    <p className='text-red-800'>{form1.formState.errors?.location?.message}</p>
                                }
                            </div>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="title">Your role in the company</label>
                                <input type='text' id='title' className='input-el mt-2'
                                    placeholder='Enter your role.'
                                    {...form1.register('role')}
                                />
                                {form1.formState.errors.role &&
                                    <p className='text-red-800'>{form1.formState.errors?.role?.message}</p>}
                            </div>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="email">Provide your company email</label>
                                <input type='email' id='email' className='input-el mt-2'
                                    placeholder='Eg.example@email.com.'
                                    {...form1.register('company_email')}
                                />
                                {form1.formState.errors.company_email &&
                                    <p className='text-red-800'>{form1.formState.errors?.company_email?.message}</p>}
                            </div>
                            <div className='mt-2 mb-2'>
                                <label htmlFor="phone">Provide your company phone</label>
                                <input type='tel' id='phone' className='input-el mt-2'
                                    placeholder='Enter phone number .'
                                    {...form1.register('company_phone')}
                                />
                                {form1.formState.errors.company_phone &&
                                    <p className='text-red-800'>{form1.formState.errors?.company_phone?.message}</p>}
                            </div>
                            <div className='mt-2'>
                                <label htmlFor='description'>Company Description</label>
                                <textarea
                                    {...form1.register('description')}
                                    placeholder='Type your job description here|'
                                    className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
                                />
                                {form1.formState.errors.description &&
                                    <p className='text-red-800'>{form1.formState.errors?.description?.message}</p>
                                }
                            </div>
                            <div className='mt-2'>
                                <label htmlFor='picth'>One Line Pitch</label>
                                <textarea
                                    {...form1.register('one_Line_Pitch')}
                                    placeholder='Type your one line pitch sentence here|'
                                    className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
                                />
                                {form1.formState.errors.one_Line_Pitch &&
                                    <p className='text-red-800'>{form1.formState.errors?.one_Line_Pitch?.message}</p>
                                }
                            </div>
                            <div className='w-full mt-2 mb-2'>
                                <label htmlFor="salaryMin">Total Number of Staff</label>
                                <input type='number' id='salaryMin'
                                    className='input-el mt-2' placeholder=''
                                    {...form1.register('staff', {
                                        required: 'Number of staff',
                                        valueAsNumber: true,

                                    })}
                                />
                                {form1.formState.errors.staff &&
                                    <p className='text-red-800'>{form1.formState.errors?.staff?.message}</p>}
                            </div>
                            <div className='w-full mt-2 mb-2'>
                                <label htmlFor="salaryMin">Company's Website</label>
                                <input type='text' id='salaryMin'
                                    className='input-el mt-2' placeholder=''
                                    {...form1.register('website')}
                                />
                                {form1.formState.errors.website &&
                                    <p className='text-red-800'>{form1.formState.errors?.website?.message}</p>}
                            </div>
                       
                        </form>
                        {/* <div className="div relative flex flex-col">
                            <label htmlFor="email" className='text-gray-500 font-medium'>Upload Company Logo</label>
                            <CloudinaryUploadWidget onUpload={handleUpload} />
                            {imageUrl && (
                                <div>
                                    <h2>Uploaded Image:</h2>
                                    <Image src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
                                </div>
                            )}

                        </div> */}
                        <div className='mt-2 flex flex-col w-full gap-2'>
                            <label htmlFor="email" className='text-gray-500 font-medium'>Provide your company socials</label>
                            {socials.map((social, index) => (
                                <SocialInput
                                    key={index}
                                    index={index}
                                    platform={social.platform}
                                    handle={social.handle}
                                    link={social.link}
                                    onChange={handleInputChange}
                                />
                            ))}
                            <button className='bg-primary_green text-white general-btn w-fit' onClick={addSocial}>Add New Social</button>
                        </div>
                    </div>
                </>
            )}
            {/* Requirements */}
            {
                currentStep === 2 && (
                    <button className="bg-primary_green text-white px-4 py-2 mt-5 h-[40px] capitalize rounded-xl cursor-pointer w-fit" onClick={() => handleVerifyCompany(data?.data?.[0]?._id || "")}>
                        Verify {data?.data?.[0]?.name}
                    </button>
                )
        }
            {/* confirmation */}
            {currentStep === 3 && (<Confirmation />)}

            <div className='absolute right-12'>
                <div className='flex justify-center items-center gap-4 md:gap-12 font-medium'>
                    {currentStep === 1 || currentStep != 4 && (
                        <button className='border-gray-400 border general-btn'
                            onClick={handlePrev}
                        >Prev</button>
                    )}
                    {currentStep === 1 && (
                        <button type='submit' className='bg-primary_green text-white general-btn'
                            onClick={form1.handleSubmit(onSubmit)}
                        > {isLoading && <LoadingIcon />} Submit</button>
                    )}
                  
                    {/* {currentStep === 3 && (
                        <button className="bg-primary_green text-white general-btn"
                            onClick={form3.handleSubmit(onSubmit)}
                        >
                            <span className="flex gap-4 mx-auto item-center justify-center">{isLoading && <LoadingIcon />} Submit</span>
                        </button>
                    )} */}

                </div>
            </div>


        </AdminLayout>
    )
}


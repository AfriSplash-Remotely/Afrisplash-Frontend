import React, { useState } from 'react'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Select from "react-select";
import AdminLayout from '@/layouts/adminLayout';
import checked from "assets/candidateOnboarding/checked.svg";
import unchecked from "assets/candidateOnboarding/unchecked.svg"
import { CreateJobSchema, StepOne, StepTwo, StepThree } from '@/schema/job.schema';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { jobIndustry, expLevel, jobsType, Location, gender, payment, currency } from './jobsData';
import { selectStyle } from '@/utils/helper';
import { useMutation } from '@tanstack/react-query';
import { createJob } from '@/api-endpoints/jobs/jobs.api';
import Confirmation from './confirmation';
import LoadingIcon from "@/components/atoms/LoaingIcon";
import toast from "react-hot-toast";

export default function CreateJobs(): JSX.Element {

  const { data: session, status } = useSession()

  const [currentStep, setCurrentStep] = useState<number>(1)
  const createJobStep = [
    { id: 1, name: "Job Details" },
    { id: 2, name: 'Job Requirements' },
    { id: 3, name: "Job Demographics" },
    { id: 4, name: "Confirmation" }
  ]
  const [formOneValues, setformOneValues] = useState<StepOne | null>(null)
  const [formTwoValues, setformTwoValues] = useState<StepTwo | null>(null)


  const form1 = useForm<StepOne>({
    resolver: yupResolver(CreateJobSchema.stepOne)
  })
  const form2 = useForm<StepTwo>({
    resolver: yupResolver(CreateJobSchema.stepTwo)
  })
  const form3 = useForm<StepThree>({
    resolver: yupResolver(CreateJobSchema.stepThree)
  })

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleNext = async (result: StepOne | StepTwo) => {    
    const nextStep = currentStep + 1

    if (currentStep === 1) {
      setformOneValues(result as StepOne)
      setCurrentStep(nextStep)
    } else {
      setformTwoValues(result as StepTwo)
      setCurrentStep(nextStep)
    }
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: object) => createJob(payload, session?.user?.accessToken as string),

    onSuccess: () => {
      setCurrentStep(4)
    },
    onError: () => {
      toast.error('An error occured')

    }
  })

  const onSubmit = (data: StepThree, e: any) => {
    e.preventDefault()
    const completedSteps = { ...data, ...formOneValues, ...formTwoValues }
    mutate(completedSteps)
  }

  return (
    <AdminLayout>
      <div>
        <div>
          <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-2xl">Post a  job</h1>
          <p className='text-grey_4 font-medium text-lg'>Find your next great hire</p>
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
              <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Details</h1>
              <p className='text-dark_black font-medium text-base mt-2'>Please  complete the form below to post a job
              </p>
            </div>
            <form className='text-gray-500 font-medium mb-4 '>
              <div className='mt-2 mb-2'>
                <label htmlFor="title">Job Title</label>
                <input type='text' id='title' className='input-el mt-2'
                  placeholder='Product designer, Product manager, Programmer etc.'
                  {...form1.register('title')}
                />
                {form1.formState.errors.title &&
                  <p className='text-red-800'>{form1.formState.errors?.title?.message}</p>}
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
              <div className='mt-2'>
                <label htmlFor='description'>Job Description</label>
                <textarea
                  {...form1.register('description')}
                  placeholder='Type your job description here|'
                  className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
                />
                {form1.formState.errors.description &&
                  <p className='text-red-800'>{form1.formState.errors?.description?.message}</p>
                }
              </div>
            </form>
          </div>
        </>
      )}
      {/* Requirements */}
      {currentStep === 2 && (
        <>
          <div className='pr-24'>
            <div className='py-6'>
              <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Requirement</h1>

            </div>
            <form className='text-gray-500 font-medium mb-4'>
              <div className='mt-2 mb-2'>
                <label htmlFor='requirement'>Requirement</label>
                <textarea
                  {...form2.register("requirement")}
                  placeholder='Type your job requirements here|'
                  className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
                />
                {form2.formState.errors.requirement &&
                  <p className='text-red-800'>{form2.formState.errors?.requirement?.message}</p>
                }
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor='experience'>Experience level</label>
                <Controller
                  name='experience'
                  control={form2.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id='experience'
                      options={expLevel}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={expLevel.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select experience level' />

                  )}
                />
                {form2.formState.errors.experience &&
                  <p className='text-red-800'>{form2.formState.errors?.experience?.message}</p>
                }
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor='type'>Job type</label>

                <Controller
                  name='type'
                  control={form2.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id='jobType'
                      options={jobsType}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={jobsType.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select job type' />
                  )}
                />
                {form2.formState.errors.type &&
                  <p className='text-red-800'>{form2.formState.errors?.type?.message}</p>
                }
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor='benefit'>Benefits</label>
                <textarea
                  {...form2.register("benefits")}
                  placeholder='Type the job benefits here|'
                  className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
                />
                {form2.formState.errors.benefits &&
                  <p className='text-red-800'>{form2.formState.errors?.benefits?.message}</p>
                }
              </div>
            </form>
          </div>
        </>
      )}
      {/* Demographics */}
      {currentStep === 3 && (
        <>
          <div className='pr-24'>
            <div className='py-6'>
              <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Demographics</h1>
            </div>
            <form className='text-gray-500 font-medium mb-4'>
              <div className='mt-2 mb-2'>
                <label htmlFor="location">Job Location</label>
                <Controller
                  name='location'
                  control={form3.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="location"
                      options={Location}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={Location.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select location or remote-based' />

                  )}

                />
                {form3.formState.errors.location &&
                  <p className='text-red-800'>{form3.formState.errors?.location?.message}</p>

                }
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor="gender">Gender</label>
                <Controller
                  name='gender'
                  control={form3.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="gender" options={gender}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={gender.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select gender' />
                  )}
                />
                {form3.formState.errors.gender &&
                  <p className='text-red-800'>{form3.formState.errors?.gender?.message}</p>

                }
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor="cuurency">Currency</label>
                <Controller
                  name='salary.currency'
                  control={form3.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="currency"
                      options={currency}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={currency.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select Payment Currency' />
                  )}

                />
                {form3.formState.errors.salary?.currency &&
                  <p className='text-red-800'>{form3.formState.errors?.salary?.currency?.message}</p>
                }
              </div>
              <div className=' flex justify-between items-center gap-8'>
                <div className='w-full mt-2 mb-2'>
                  <label htmlFor="salaryMin">Min Salary</label>
                  <input type='text' id='salaryMin'
                    className='input-el mt-2' placeholder='Minimum Salary for this job'
                    {...form3.register('salary.min')}
                  />
                  {form3.formState.errors.salary?.min &&
                    <p className='text-red-800'>{form3.formState.errors?.salary?.min?.message}</p>}
                </div>
                <div className='w-full mt-2 mb-2'>
                  <label htmlFor="salaryMax">Max Salary</label>
                  <input type='text' id='salaryMax'
                    className='input-el mt-2' placeholder='Maximum Salary for this job'
                    {...form3.register('salary.max')}
                  />
                  {form3.formState.errors.salary?.max &&
                    <p className='text-red-800'>{form3.formState.errors?.salary?.max?.message}</p>}
                </div>
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor="payment">Payment Period</label>
                <Controller
                  name='salary.period'
                  control={form3.control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="payment" options={payment}
                      styles={selectStyle}
                      onChange={(e: any) => field.onChange(e?.value)}
                      value={payment.find((e) => e.value === field.value)}
                      ref={field.ref}
                      placeholder='Select payment period' />
                  )}
                />
                {form3.formState.errors.salary?.period &&
                  <p className='text-red-800'>{form3.formState.errors?.salary?.period?.message}</p>
                }
              </div>

            </form>
          </div>
        </>
      )}
      {/* confirmation */}
      {currentStep === 4 && (<Confirmation />)}

      <div className='absolute right-12'>
        <div className='flex justify-center items-center gap-4 md:gap-12 font-medium'>
          {currentStep === 1 || currentStep != 4 && (
            <button className='border-gray-400 border general-btn'
              onClick={handlePrev}
            >Prev</button>
          )}
          {currentStep === 1 && (
            <button className='bg-primary_green text-white general-btn'
              onClick={form1.handleSubmit(handleNext)}
            >Next</button>
          )}
          {currentStep === 2 && (
            <button className='bg-primary_green text-white general-btn'
              onClick={form2.handleSubmit(handleNext)}
            >Next</button>
          )}
          {currentStep === 3 && (
            <button className="bg-primary_green text-white general-btn"
              onClick={form3.handleSubmit(onSubmit)}
            >
              <span className="flex gap-4 mx-auto item-center justify-center">{isLoading && <LoadingIcon />} Submit</span>
            </button>
          )}

        </div>
      </div>


    </AdminLayout>
  )
}


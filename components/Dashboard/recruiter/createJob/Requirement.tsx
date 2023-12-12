import React from 'react'
import Select from "react-select";
import { selectStyle } from '@/utils/helper';
import { expLevel, jobType } from './jobsData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { CreateJobSchema } from '@/schema/job.schema';

type RequirementFeild = {
  requirement: string,
  experience: string,
  jobType: string,
  benefits: string
}

export default function Requirement():JSX.Element {
  const { register, control, formState: { errors } } = useForm<RequirementFeild>({
    resolver: yupResolver(CreateJobSchema.stepTwo)
  })
  return (
    <div className='pr-24'>
      <div className='py-6'>
        <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Requirement</h1>

      </div>
      <form className='text-gray-500 font-medium mb-4'>
        <div className='mt-2 mb-2'>
          <label htmlFor='requirement'>Requirement</label>
          <textarea maxLength={150}
            {...register("requirement")}
            placeholder='Type your job requirements here|'
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
          <p className='text-red-800'>{errors.requirement?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='experience'>Experience level</label>
          <Controller
            {...register("experience")}
            name='experience'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id='experience'
                options={expLevel}
                styles={selectStyle}
                placeholder='Select experience level' />

            )}
          />
          <p className='text-red-800'>{errors.experience?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='job-type'>Job type</label>
          <Controller
            {...register("jobType")}
            name='jobType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id='job-type'
                options={jobType}
                styles={selectStyle}
                placeholder='Select job type' />
            )}
          />
          <p className='text-red-800'>{errors.jobType?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='benefit'>Benefits</label>
          <textarea 
          {...register("benefits")}
          maxLength={150}
            placeholder='Type the job benefits here|'
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
          <p className='text-red-800'>{errors.benefits?.message}</p>
        </div>
      </form>
    </div>

  )
}

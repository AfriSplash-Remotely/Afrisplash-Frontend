import React from 'react'
import Select from "react-select";
import { selectStyle } from '@/utils/helper';
import { jobIndustry } from './jobsData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { CreateJobSchema } from '@/schema/job.schema';

type DetailsField = {
  jobTitle: string,
  jobIndustry: string,
  jobDescribtion: string
}

export default function Details():JSX.Element {
  const { register, control, formState: { errors } } = useForm<DetailsField>({
    resolver: yupResolver(CreateJobSchema.stepOne)
  })

  return (
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
            {...register('jobTitle')}
          />
          <p className='text-red-800'>{errors.jobTitle?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="industry">Job Industry</label>
          <Controller
            {...register("jobIndustry")}
            name='jobIndustry'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="industry"
                options={jobIndustry}
                styles={selectStyle}
                placeholder='Select Job Industy' />
            )}

          />
          <p className='text-red-800'>{errors.jobIndustry?.message}</p>
        </div>
        <div className='mt-2'>
          <label htmlFor='description'>Job Description</label>
          <textarea
            {...register('jobDescribtion')}
            maxLength={150}
            placeholder='Type your job description here|'
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
          <p className='text-red-800'>{errors.jobDescribtion?.message}</p>
        </div>
      </form>
    </div>
  )
}

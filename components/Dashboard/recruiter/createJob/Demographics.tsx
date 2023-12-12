import React from 'react'
import Select from "react-select";
import { selectStyle } from '@/utils/helper';
import { Location, gender, salary, payment } from './jobsData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { CreateJobSchema } from '@/schema/job.schema';

type DemographicsField = {
  title: string,
  gender: string,
  salary: string,
  paymentPeriod: string
}

export default function Demographics():JSX.Element {
  const { register, control, formState: { errors } } = useForm<DemographicsField>({
    resolver: yupResolver(CreateJobSchema.stepThree)
  })
  return (
    <div className='pr-24'>
      <div className='py-6'>
        <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Demographics</h1>
      </div>
      <form className='text-gray-500 font-medium mb-4'>
        <div className='mt-2 mb-2'>
          <label htmlFor="location">Job Title</label>
          <Controller
            {...register('title')}
            name='title'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="location"
                options={Location}
                styles={selectStyle}
                placeholder='Select location or remote-based' />

            )}

          />
          <p className='text-red-800'>{errors.title?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="gender">Gender</label>
          <Controller
            {...register('gender')}
            name='gender'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="gender" options={gender}
                styles={selectStyle} placeholder='Select gender' />
            )}
          />
          <p className='text-red-800'>{errors.gender?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="salary">Salary</label>
          <Controller
            {...register('salary')}
            name='salary'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="salary" options={salary}
                styles={selectStyle} placeholder='Select salary' />
            )}
          />
          <p className='text-red-800'>{errors.salary?.message}</p>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="payment">Payment Period</label>
          <Controller
            {...register('paymentPeriod')}
            name='paymentPeriod'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="payment" options={payment}
                styles={selectStyle} placeholder='Select payment period' />
            )}
          />
          <p className='text-red-800'>{errors.paymentPeriod?.message}</p>
        </div>

      </form>
    </div>
  )
}

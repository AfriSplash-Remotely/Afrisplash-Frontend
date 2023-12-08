import React from 'react'
import Select from "react-select";
import { selectStyle } from '@/utils/helper';
import { expLevel, jobType } from './jobsData';


export default function Requirement():JSX.Element {
  return (
    <div className='pr-24'>
      <div className='py-6'>
        <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Requirement</h1>

      </div>
      <form className='text-gray-500 font-medium mb-4'>
        <div className='mt-2 mb-2'>
          <label htmlFor='requirement'>Requirement</label>
          <textarea maxLength={150}
            placeholder='Type your job requirements here|'
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='experience'>Experience level</label>
          <Select id='experience' options={expLevel} styles={selectStyle} placeholder='Select experience level'/>
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='job-type'>Job type</label>
          <Select id='job-type' options={jobType} styles={selectStyle} placeholder='Select job type' />
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor='benefit'>Benefits</label>
          <textarea maxLength={150}
            placeholder='Type the job benefits here|'
            className="border-2 border-gray-300 rounded-md mb-2 w-full h-40 py-2 pl-4 outline-none"
          />
        </div>
      </form>
    </div>

  )
}

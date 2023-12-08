import React from 'react'
import Select from "react-select";
import { selectStyle } from '@/utils/helper';
import { Location, gender, salary, payment } from './jobsData';

export default function Demographics():JSX.Element {
  return (
    <div className='pr-24'>
      <div className='py-6'>
        <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Job Demographics</h1>
      </div>
      <form className='text-gray-500 font-medium mb-4'>
        <div className='mt-2 mb-2'>
          <label htmlFor="location">Job Title</label>
          <Select id="location" options={Location} styles={selectStyle} placeholder='Select location or remote-based' />
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="gender">Gender</label>
          <Select id="gender" options={gender} 
          styles={selectStyle} placeholder='Select gender' />

        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="salary">Salary</label>
          <Select id="salary" options={salary}
            styles={selectStyle} placeholder='Select salary' />
        </div>
        <div className='mt-2 mb-2'>
          <label htmlFor="payment">Payment Period</label>
          <Select id="payment" options={payment}
            styles={selectStyle} placeholder='Select payment period' />
        </div>

      </form>
    </div>
  )
}

import React from 'react'
import Button from 'components/atoms/Button/Button'
import DropDown from 'components/atoms/DropDown/DropDown'
import RadioBtn from 'components/atoms/RadioButton/RadioBtn'
export default function EmployerSideBar() {
    return (
        <div className='bg-pirmary_grey rounded-lg p-4 mx-12'>
            <div className='py-4'>
                <h3 className='font-medium'>Sort by</h3>

                <RadioBtn label={'Relevance'} value={'Relevance'} />
                <RadioBtn label={'Date'} value={'Date'} />
            </div>
            <hr className='mt-6 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Job Category</h3>
                <DropDown />
            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Job Type</h3>
                <div>
                    <RadioBtn label={'Full-time'} value={'Full-time'} />
                    <RadioBtn label={'Part-time'} value={'Part-time'} />
                    <RadioBtn label={'Contract-based'} value={'Contract-based'} />
                    <RadioBtn label={'Freelance'} value={'Freelance'} />
                    <RadioBtn label={'Internship'} value={'Internship'} />
                </div>
            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Salary</h3>

            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Location</h3>
                <div>
                    <RadioBtn label={'Remote'} value={'Remote'} />
                    <RadioBtn label={'Hybrid'} value={'Hybrid'} />
                    <RadioBtn label={'Onsite'} value={'Onsite'} />
                </div>
                <p className='text-primary_grey'>
                    Indicate below if employee can work from any country, or must
                    be lin a specific location</p>
                <RadioBtn label={'Anywhere'} value={'Anywhere'} />
                <DropDown />

            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Gender</h3>
                <RadioBtn label={'Male'} value={'Male'} />
                <RadioBtn label={'Female'} value={'Female'} />
            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Experience</h3>
                <div>
                    <RadioBtn label={'0-1 year'} value={'0-1 year'} />
                    <RadioBtn label={'2-3 years'} value={'2-3 years'} />
                    <RadioBtn label={'4-5 years'} value={'4-5 years'} />
                    <RadioBtn label={'5-6 years'} value={'5-6 years'} />
                    <RadioBtn label={'7-8 years'} value={'7-8 years'} />
                </div>
            </div>
            <hr className='mt-12 mx-4 mb-12' />
            <div>
                <h3 className='font-medium mb-4'>Skills</h3>
                <DropDown />
                <div className='mt-6 flex justify-center'>
                    <Button
                        type='filled'
                        // bgColor='primary_green'
                        color='white'
                        text='Apply filters'
                        classes="w-64 h-12  md:w-64 xl:w-full rounded-md text-sm capitalize  text-white bg-primary_green hover:opacity-80"

                    />
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import Image from 'next/image'
import DropDown from 'components/atoms/DropDown/DropDown'
import RadioBtn from 'components/atoms/RadioButton/RadioBtn'
import filters from 'assets/filters.png';
<<<<<<< HEAD
import { Location } from '../Dashboard/recruiter/createJob/jobsData';

=======
>>>>>>> head reset

const experienceRadio = [
    { label: "0-1 year" },
    { label: "2-3 years" },
    { label: "4-5 years" },
    { label: "5-6 years" },
    { label: "7-8 years" },
]
const jobRadio = [
    { label: "Full-time" },
    { label: "Part-time" },
    { label: "Contract-based" },
    { label: "Freelance" },
    { label: "Internship" },
]
export default function CandidateSideBar(): JSX.Element {
    const [openJobCat, setOpenJobCat] = useState<boolean>(false);
    const [openCountry, setOpenCountry] = useState<boolean>(false);
    const [openSkills, setOpenSkills] = useState<boolean>(false);
    return (
        <div className='bg-[#F8F8F8] rounded-lg p-4 '>
            <div className='mx-0 md:mx-12'>
                <div className='py-4'>
                    <h3 className='font-medium'>Sort by</h3>

                    <RadioBtn label={'Relevance'} value={'Relevance'} />
                    <RadioBtn label={'Date'} value={'Date'} />
                </div>
                <hr className='mt-6 mx-4 mb-12' />
                <div className='w-full'>
                    <h3 className='font-medium mb-4'>Job Category</h3>
                    <DropDown text="select category" options={["Health", "Technology", "Business"]} isOpen={openJobCat} onClick={() => setOpenJobCat(!openJobCat)} />
                </div>
                <hr className='mt-12 mx-4 mb-12' />
                <div>
                    <h3 className='font-medium mb-4'>Job Type</h3>
                    <div>
                        {jobRadio.map((job) => (
                            <RadioBtn key={job.label} label={job.label} value={job.label} />
                        ))}
                    </div>
                </div>
                <hr className='mt-12 mx-4 mb-12' />
                <div>
                    <h3 className='font-medium mb-4'>Salary</h3>
                    <div>
                        <div className='flex font-medium justify-end'>$20,000 - $60,000</div>
                        <div className='mt-4 '>
                            <input type='range' className='w-full' />

                        </div>
                    </div>

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
                    <DropDown text="select country" options={["Nigeria", "United Kingdom", "United States"]} isOpen={openCountry} onClick={() => setOpenCountry(!openCountry)} />

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
                        {experienceRadio.map((exp) => (
                            <RadioBtn key={exp.label} label={exp.label} value={exp.label} />
                        ))}
                    </div>
                </div>
                <hr className='mt-12 mx-4 mb-12' />
                <div>
                    <h3 className='font-medium mb-4'>Skills</h3>
                    <DropDown text="select skills" options={["Health", "Technology", "Business"]} isOpen={openSkills} onClick={() => setOpenSkills(!openSkills)} />
                    <div className='mt-6 flex justify-center'>
                        <button className=" w-64 h-12  md:w-64 xl:w-full flex gap-2 bg-[#0D5520] items-center justify-center  p-4 rounded-md hover:opacity-80">
                            <Image src={filters} alt="sms" />
                            <span className="text-white font-medium">Apply filters</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

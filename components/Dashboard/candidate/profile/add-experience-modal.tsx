import React, { useEffect, useState } from 'react'
import Modal from '@/components/modal/Modal'
import { CancelIcon } from '@/assets';
import { DateInput, Input } from '@/components/Input';
import { Location } from '../../recruiter/createJob/jobsData';
import { Button, OutlineBtn } from '@/components/button';
import PrimarySelect from './primary-selects';
interface modalcompProps {
    open: boolean;
    setOpen: any;
    onClick: any;
    loading: boolean;
    setData: any;
}




const techJobTypes = [
    "Software Developer",
    "Web Developer",
    "Mobile App Developer",
    "Data Scientist",
    "Data Analyst",
    "Database Administrator",
    "Network Engineer",
    "Systems Analyst",
    "UI/UX Designer",
    "DevOps Engineer",
    "QA Engineer",
    "Cybersecurity Analyst",
    "Cloud Architect",
  
];
const AddExperienceModal: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading }) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
   
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [desc, setDesc] = useState("");
    const [field, setField] = useState<any>({});
    const [location, setLocation] = useState<any>({ name: "", label:""});
    const techJobTypesList = techJobTypes.map(jobType => ({
        name: jobType,
        label: jobType,
    }));
    const locationList = Location?.map((item:any) => (
        {name:item.value, label:item.label}
    ))

    useEffect(() => {
        const bodyData = [
            {
                "company_name": name,
                "position_held": position,
                "location": location?.name,
                "job_type": field?.name,
                "date_start": startDate,
                "date_end": endDate,
                "description": desc
            }
        ];

        setData(bodyData);
   

    }, [name, position, location, startDate, endDate, desc, field])

    



    return (
        <div className='relative'>
            <Modal open={open} setOpen={setOpen} >
                <div className="w-full flex flex-col ">
                    <div className="flex justify-end">
                        <span onClick={() => setOpen(false)}>
                            <CancelIcon />
                        </span>
                    </div>
                    <div className="lg:w-10/12 w-full mx-auto mt-4 flex flex-col">
                        <h1 className='text-black text-2xl lg:text-4xl font-bold'>
                            Update Experience
                        </h1>

                        <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2  gap-4  ">
                            <Input label={'Company name'} value={name} setValue={setName} />
                            <Input label={'Position held'} value={position} setValue={setPosition} />
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 mt-4">
                           
                            <div className='w-full flex flex-col'>
                                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                    Location
                                </label>
                                <PrimarySelect data={locationList} selected={location} setSelected={setLocation} label={''} />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                    Job type
                                </label>
                                <PrimarySelect data={techJobTypesList} selected={field} setSelected={setField} label={''} />
                            </div>
                            <div className='flex flex-col'>
                                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                    Start Date
                                </label>
                                <DateInput date={startDate} setDate={setStartDate} />
                            </div>
                            <div className='flex flex-col'>
                                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                    End Date
                                </label>
                                <DateInput date={endDate} setDate={setEndDate} />
                                <div className="flex items-center justify-between mt-3">
                                    <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                        I currently work here
                                    </label>
                                    <span>
                                        <input type="checkbox" name="" id="" className='w-4 h-4' />
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex flex-col">
                            <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                Description
                            </label>
                            <textarea className='h-[120px] p-4 border border-[#BBBBC3] rounded-[10px]  ' onChange={(e) => setDesc(e.target.value)} value={desc} />

                        </div>

                        <div className="w-full flex flex-col md:justify-center gap-4 items-center lg:items-center md:flex-row mt-12">
                            <span>
                                <OutlineBtn name='Cancel' onClick={() => setOpen(false)} />
                            </span>
                            <Button name={'Update'} loading={loading} onClick={onClick} disabled={loading} />
                        </div>







                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default AddExperienceModal

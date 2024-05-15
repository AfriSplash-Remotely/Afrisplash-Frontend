import React, { SetStateAction, useEffect, useState } from 'react'
import Modal from '@/components/modal/Modal'
import { CancelIcon } from '@/assets';
import {  Input } from '@/components/Input';
import { Location } from '../../recruiter/createJob/jobsData';
import { Button, OutlineBtn } from '@/components/button';
import PrimarySelect from './primary-selects';
interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick: any;
    loading: boolean;
    setData: any;
    data: any;
}




const EditContactDetails: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading,data }) => {
    const [email, setEmail] = useState<string>(data.email ? data?.email :"");
    const [phone, setPhone] = useState<string>(data.phone ? data?.phone : "");

  
    const [field, setField] = useState<any>({});
    const [location, setLocation] = useState<any>({ name: data.location ? data?.location : "", label: "" });

    const locationList = Location?.map((item: any) => (
        { name: item.value, label: item.label }
    ))

    useEffect(() => {
        const bodyData = 
            {
                "phone": phone,
                "email": email,
                "location": location?.name
            }
        

        setData(bodyData);


    }, [ location, phone,email])





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
                            Contact Details
                        </h1>

                        <div className="w-full mt-8 grid grid-cols-1   gap-4  ">
                            <Input label={'Email'} value={email} setValue={setEmail} />
                        
                        </div>
                        <div className="w-full grid grid-cols-1  gap-x-4 gap-y-4 mt-4">

                            <div className='w-full flex flex-col'>
                                <label className="text-sm  lg:text-base text-[#606172]  font-semibold  mb-2">
                                    Location
                                </label>
                                <PrimarySelect data={locationList} selected={location} setSelected={setLocation} label={''} />
                            </div>
                            <div className='w-full flex flex-col'>
                                <Input label={'Phone'} value={phone} setValue={setPhone} type='tel' />
                            </div>
                         
                         
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

export default EditContactDetails

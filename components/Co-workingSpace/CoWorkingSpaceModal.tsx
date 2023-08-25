import React from 'react'
import Button from "@/components/atoms/Button/Button";
import LocateImage from "../../assets/co-workingSpace/locate.svg";
import Image from 'next/image';
import Select from "react-select";
import Modal from '../atoms/Modal/Modal';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const CoWorkingSpaceModal: React.FC<ModalProps> = ({ open, onClose }) => {

    const customStyles = {
        control: (base: any,) => ({
            ...base,
            height: "62px",
            marginTop: "20px",
            backgroundColor: "transparent",
            border: "2px solid #979797",
            borderRadius: "0px",
        }),
        placeholder: (base: any) => ({
            ...base,
            color: "white",
            text: "20px"
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
    };

    return (
            <Modal
            isOpen={open}
            setIsOpen={onClose}
            dialogPanelClass="max-w-2xl"
            >
            <div className="bg-primary_green  text-center text-white md:p-20 -m-6 p-5 rounded-t-2xl">
                    <div className='md:mx-20 pt-28 '>
                        <h1 className='md:text-[48px] text-[28px] font-[700] leading-[72px]'>Nairobi Garage</h1>
                        <div className='flex justify-center gap-2'>
                            <Image src={LocateImage} alt='Locate' className='w-[15px] h-[20px] ml-3' />
                            <span className='md:text-[16px] text-[14px] font-[500] leading-[19px]'>Delta Corner Annex, Ring Rd Westlands</span>
                        </div>
                        <span className='text-[16px] font-[700] leading-[24px]'>Hosted by: Afrisplash</span><br></br>
                        <span className='text-[12px] font-[700] leading-[18px] text-grey_4'>Since 2022</span>
                    </div>
                    <hr className='my-10 mx-8 border-grey_3' />
                    <div className='text-start'>
                        <span className='text-[16px] font-[700] leading-[24px] text-grey_4'>The space is avilable on the following basis:</span>
                        <Select placeholder="Per Day Dollar 15" styles={customStyles} />
                    </div>
                    <div className='md:grid md:grid-cols-2 gap-4 text-start my-14 text-grey_4'>
                        <div className=''>
                            <span className='text-[16px] font-[700] leading-[24px]'>Check-In</span>
                            <input
                                name='checkIn'
                                title='Check-In'
                                type="text"
                                value="07-04-2022"
                                className="h-[64px] pl-3 mt-6 text-white w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg"

                            />
                        </div>
                        <div className='mt-14 md:mt-0'>
                            <span className='text-[16px] font-[700] leading-[24px]'>Duration</span>
                            <input
                                name='duration'
                                title='Duration'
                                type="text"
                                className="h-[64px] pl-3 mt-6 text-white w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg "
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-start my-14 text-dark md:p-20 -m-6 p-5'>
                        <div className='mb-10'>
                            <span className='text-[16px] font-[400] leading-[24px]'>First Name</span>
                            <input
                                name='firstName'
                                title='First Name'
                                type="text"
                                className="h-[64px] pl-3 mt-6 w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg"

                            />
                        </div>
                        <div className='mb-10'>
                            <span className='text-[16px] font-[400] leading-[24px]'>Last Name</span>
                            <input
                                name='lastName'
                                title='Last Name'
                                type="text"
                                className="h-[64px] pl-3 mt-6 w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg "
                            />
                        </div>
                        <div className='mb-10'>
                            <span className='text-[16px] font-[400] leading-[24px]'>Email address</span>
                            <input
                                name='emailAddress'
                                title='Email address'
                                type="email"
                                className="h-[64px] pl-3 mt-6 w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg "
                            />
                        </div>
                        <div className='mb-10'>
                            <span className='text-[16px] font-[400] leading-[24px]'>Phone number</span>
                            <input
                                name='phoneNumber'
                                title='Phone number'
                                type="text"
                                className="h-[64px] pl-3 mt-6 w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg "
                            />
                        </div>
                        <div className='mb-10'>
                            <span className='text-[16px] font-[400] leading-[24px]'>Message</span>
                            <textarea
                                name='message'
                                title='Message'
                                rows={5}
                                cols={50}
                                className="pl-3 py-3 mt-6 w-full bg-transparent border-2 border-checkBox_bg outline-checkBox_bg "
                            />
                        </div>
                        <div className="">
                            <Button
                                onClick={onClose}
                                type="autlined"
                                color="primary_green"
                                text="Submit Request"
                                classes="w-full h-[71px] text-[19px] font-[700] leading-[26px] capitalize text-white bg-primary_green "
                            />
                        </div>

                    </div>
                </div>
            </Modal>
    );
}

export default CoWorkingSpaceModal;

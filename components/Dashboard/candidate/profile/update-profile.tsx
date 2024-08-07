import React, { SetStateAction, useEffect, useState } from 'react';
import Modal from '@/components/modal/Modal';
import { CancelIcon } from '@/assets';
import { Input } from '@/components/Input';
import { Button, OutlineBtn } from '@/components/button';
import ImageUpload from '@/components/Upload/upload-image';

interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick: () => void;
    loading: boolean;
    setData: React.Dispatch<SetStateAction<object>>;
    userData: any;
}

const UpdateProfileModal: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading,userData }) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
        setFirstName(userData?.first_name);
        setLastName(userData?.last_name);
        setRole(userData?.role);
    }, [])
    

    useEffect(() => {
        const bodyData = {
            "profile_image": imageUrl,
            "thumbnail": imageUrl,
            "role": role,
            "first_name": firstName,
            "last_name": lastName
        };
        

        setData(bodyData);

    }, [firstName, lastName, role, imageUrl])

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
                            Update Profile
                        </h1>

                        <div className="w-full mt-8 ">
                            <Input label={'First Name'} value={firstName} setValue={setFirstName} />
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-x-4 gap-y-4 mt-4">
                            <div>

                                <Input label={'Last Name'} value={lastName} setValue={setLastName} />
                            </div>
                            <div>

                                <Input label={'Your Role'} value={role} setValue={setRole} />
                            </div>
                            <div className="w-full">
                                <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} label="Upload profile Image" />
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

export default UpdateProfileModal

import { SetStateAction, useEffect, useState } from 'react';
import Modal from '@/components/modal/Modal';
import { CancelIcon } from '@/assets';
import { Input } from '@/components/Input';
import { Button, OutlineBtn } from '@/components/button';
interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick: () => void;
    loading: boolean;
    setData: any;
    bio: string,
    setBio:React.Dispatch<SetStateAction<string>>
}





const EditBio: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading,bio,setBio }) => {
  





    useEffect(() => {
        const bodyData =
        {
            "bio": bio
        }


        setData(bodyData);


    }, [bio])

   



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
                            Update bio
                        </h1>

                        <div className="w-full mt-8 grid grid-cols-1   gap-4  ">
                            <textarea value={bio} onChange={(e: any) => setBio(e.target.value)} className='h-[152px] p-5 border border-[#BBBBC3] rounded-[10px] ' />

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

export default EditBio

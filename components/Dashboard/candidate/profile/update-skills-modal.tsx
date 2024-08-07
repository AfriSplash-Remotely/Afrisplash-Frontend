/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, KeyboardEvent, SetStateAction } from 'react';
import Modal from '@/components/modal/Modal';
import { CancelIcon } from '@/assets';
import { Button, OutlineBtn } from '@/components/button';
interface modalcompProps {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
    onClick: () => void;
    loading: boolean;
    setData: React.Dispatch<SetStateAction<string[]>>;
    data: string[];
}
const UpdateSkillModal: React.FC<modalcompProps> = ({ open, setOpen, onClick, setData, loading, data }) => {
    const [keyword, setKeyword] = useState("");
    const [list, setList] = useState<any>([]);

    useEffect(() => {
        setList(data)
    }, [data])

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const newList: any = [...list];
            newList.push(keyword);
            setKeyword("");
            setList(newList)
            setData(newList);
        }
    };

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
                            Update Skills
                        </h1>

                        <div className="w-full mt-8    gap-4 flex flex-col  ">
                            <label htmlFor="">
                                Add skill set
                            </label>
                            <div className="w-full  h-[56px] rounded-[15px] px-2 flex items-center gap-2 border border-grey">

                                <input
                                    type="text"
                                    className="border-none outline-none focus:outline-none flex-grow placeholder:text-xs bg-transparent placeholder:text-placeholder"
                                    placeholder="Press enter to add "
                                    onChange={(e) => setKeyword(e.target?.value)}
                                    value={keyword}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>

                        </div>
                        <div className="w-full flex mt-6 md:mt-8 gap-4 flex-wrap justify-start">
                            {list.map((item: string, index: number) => {
                                return (
                                    <SingleItem
                                        key={index}
                                        item={item}

                                        services={list}
                                        setServices={setList}
                                    />
                                );
                            })}
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

export default UpdateSkillModal


const SingleItem = ({ index, item, services, setServices }: any) => {
    const [active, setActive] = useState(false);
    const addItem = (item: any) => {
        if (services.includes(item)) {
            const servicesList = services.filter((e: any) => e !== item);
            setServices(servicesList);
            setActive(false);

        } else {
            const serviceList = [
                ...services,
                item
            ];
            setServices(serviceList);
            setActive(true);
        }
    }
    return (
        <p
            onClick={() => addItem(item)}
            className={
                active
                    ? "text-black text-sm md:text-2xl font-[600px] p-4 rounded-[280px]   flex items-center cursor-pointer justify-center space-medium border-[#999] border-[2px] "
                    : "text-black opacity-40 text-sm md:text-2xl font-[600] space-medium p-4 rounded-[280px] border-[2px] border-white border-opacity-40 flex items-center justify-center cursor-pointer"
            }
            key={index}
        >
            {item}
        </p>
    );
};
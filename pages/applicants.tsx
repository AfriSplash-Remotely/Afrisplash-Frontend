import type { NextPage } from 'next';
import styles from '../styles/Applicants.module.scss';
import Image from 'next/image';
import { BellIcon, GiftIcon } from '@heroicons/react/24/outline';

import Button from 'components/atoms/Button/Button';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import DropDown from 'components/atoms/DropDown/DropDown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';

import ProfileImage from '../assets/applications/ProfilePic.png';
import FrontDevLady from '../assets/applications/FrontDevLady.png';

const Applicants: NextPage = () => {

    const colorOfButton = "rgba(13, 85, 32, 1)";

    return (
        <>
            <main className='grid grid-flow-row grid-cols-1 grid-rows-1 gap-2 pt-8 px-16 '>
                <section className='grid  grid-flow-row grid-cols-6 gap-3 grid-rows-1 mb-[60px]'>
                    <SearchBar classes={styles.searchBar} onChange={() => console.log("Clicked in search...")} />
                    <div className="grid grid-flow-col col-start-5 col-end-7 place-items-center">
                        <GiftIcon className="h-6 w-6" />
                        <BellIcon className="h-6 w-6" />
                        <DropDown imageUrl={ProfileImage} classes={styles.dropDown} text={"Ready to Interview"} />
                    </div>
                </section>
                <section className="grid grid-flow-row grid-cols-7 gap-6 mb-[50px]">
                    <DropDown classes={styles.dropDown} text={"Location"} />
                    <DropDown classes={styles.dropDown} text={"Salary"} />
                    <DropDown classes={styles.dropDown} text={"Job type"} />
                    <DropDown classes={styles.dropDown} text={"Job type"} />
                    <DropDown classes={styles.dropDown} text={"Job category"} />
                </section>
                <section className="grid grid-flow-row grid-cols-3">
                    <header className='grid grid-flow-col grid-cols-1 col-start-3 grid-rows-auto mb-10 pr-5 place-items-center'>
                        <span className="underline col-span-1  text-primary_green hover:cursor-pointer">
                            <CheckBox classes={styles.checkbox} />
                            Select All
                        </span>
                        <span className="col-span-1  text-primary_green hover:cursor-pointer">Accept</span>
                        <span className="col-span-1 text-primary_green hover:cursor-pointer">Reject</span>
                    </header>
                    {/* Wrapper for each item */}
                    <div className='grid grid-flow-col grid-cols-7 col-span-full gap-2 grid-rows-auto justify-items-end mb-[52px]'>

                        <CheckBox classes={styles.checkbox} />
                        <div className={styles.applicantWrapper}>
                            <span className={styles.applicantDetails}>
                                <span className="w-16 h-16 col-span-1">
                                    <Image src={FrontDevLady} />
                                </span>
                                <section className='col-span-3'>
                                    <h3 className='text-base font-semibold mb-[16px] '>JMary Dekoo</h3>
                                    <p className="text-base mb-[22px] font-normal">Front end Developer</p>
                                    <a href="/" className='text-sm underline font-semibold text-primary_green'>View Profile</a>
                                </section>
                            </span>

                            <span className={styles.actionButtons}>
                                <Button
                                    type="filled"
                                    bgColor="primary_green"
                                    color="white"
                                    text="Accept"
                                    classes="w-max px-3 h-10 md:px-6 xl:px-12 rounded-md text-sm 
                                capitalize text-white bg-primary_green hover:opacity-80 leading-[22px]"
                                />

                                <Button
                                    type="bordered"
                                    bgColor="white-2"
                                    color="green"
                                    text="Reject"
                                    classes="w-max px-3  h-10 md:px-6 xl:px-12 rounded-md border-2 border-green-900
                                 text-sm capitalize text-primary_green bg-white hover:opacity-80 leading-[22px]"
                                />
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}



export default Applicants;
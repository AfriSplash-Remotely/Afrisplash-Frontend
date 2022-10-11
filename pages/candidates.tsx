import type { NextPage } from 'next';
import styles from '../styles/Candidates.module.scss';
import Image from 'next/image';
import { BellIcon, GiftIcon } from '@heroicons/react/24/outline';

import Button from 'components/atoms/Button/Button';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import DropDown from 'components/atoms/DropDown/DropDown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';

import ProfileImage from '../assets/applications/ProfilePic.png';
import FrontDevLady from '../assets/applications/FrontDevLady.png';
import { useState } from 'react';

const Candidates: NextPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [candidates, setCandidates] = useState([
        {
            id: 1,
            name: "JMary Dekkoo",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        },
        {
            id: 2,
            name: "JMary Dekkoo",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        },
        {
            id: 3,
            name: "JMary Dekkoo",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        },
        {
            id: 4,
            name: "JMary Dekkoo",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        }
    ])

    const [candidateLabels, setCandidateLabels] = useState([
        {
            label: 'Location',
            isOpen: false
        },
        {
            label: 'Salary',
            isOpen: false
        },
        {
            label: 'Job type',
            isOpen: false
        },
        {
            label: 'Job Category',
            isOpen: false
        }
    ])


    return (
        <>
            <main className='grid grid-flow-row grid-cols-1 grid-rows-1 gap-2 pt-8 px-16 '>
                <section className='grid  grid-flow-row grid-cols-6 gap-3 grid-rows-1 mb-[60px]'>
                    <SearchBar classes={styles.searchBar}
                        onChange={(): any => console.log("VL from Search")} />
                    <div className="grid grid-flow-col col-start-5 col-end-7 place-items-center">
                        <GiftIcon className="h-6 w-6 hover:cursor-pointer" />
                        <BellIcon className="h-6 w-6 hover:cursor-pointer" />
                        <DropDown imageUrl={ProfileImage} classes={styles.dropDown} text={"Ready to Interview"}
                            onClick={() => { setIsOpen(!isOpen); }} isOpen={isOpen} />
                    </div>
                </section>

                <section className="grid grid-flow-row grid-cols-7 gap-6 mb-[50px]">

                    {candidateLabels.map(({ label, isOpen }) => (
                        <DropDown classes={styles.dropDown} text={label} onClick={() => {
                            let newCandidateLabels: any[] = candidateLabels.map((candidate: { label: String, isOpen: Boolean }) => {
                                if (candidate.label === label) candidate.isOpen = !isOpen;
                                return candidate;
                            });
                            setCandidateLabels([...newCandidateLabels]);
                        }} isOpen={isOpen} />
                    ))}

                </section>

                <section className="grid grid-flow-row grid-cols-8">
                    <header className='grid grid-flow-col col-start-6 col-span-3 grid-rows-auto justify-self-end mb-10  place-items-center'>
                        <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer text-center">
                            <CheckBox classes={styles.checkbox} />
                            Select all
                        </p>
                        <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer">Accept</p>
                        <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer">Reject</p>
                    </header>

                    {candidates.map(({ id, name, role, imageUrl }) => (
                        <div key={id} className='grid grid-flow-col grid-cols-7 col-span-full gap-2 grid-rows-auto justify-items-end mb-[52px]'>

                            <CheckBox classes={styles.checkbox} />
                            <div className={styles.candidateWrapper}>
                                <span className={styles.candidateDetails}>
                                    <span className="w-16 h-16 col-span-1">
                                        <Image src={imageUrl} />
                                    </span>
                                    <section className='col-span-3'>
                                        <h3 className='text-base font-semibold mb-[16px] '>{name}</h3>
                                        <p className="text-base mb-[22px] font-normal capitalize">{role}r</p>
                                        <a href={id.toString()} className='text-sm underline font-semibold text-primary_green'>View Profile</a>
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
                    ))
                    }

                </section>
            </main>
        </>
    )
}



export default Candidates;
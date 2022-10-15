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
import { useState } from 'react';



const Applicants: NextPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [makeSelectOptionsVisible, setMakeSelectOptionsVisible] = useState(false);
    const [applicants, setApplicants] = useState([
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

    const [applicantLabels, setApplicantLabels] = useState([
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


    // Obtain store of Applicants from store
    const getSelectedApplicants = (id: Number): any[] => {
        return applicants.filter((applicant) => (applicant.id === id && applicant.isSelected === true) || applicant.isSelected === true);
    }

    // Handle action function
    const handleAcceptApplicants = (id: Number): any => {
        // Clear list of applicants
        let selectedAcceptedApplicants = getSelectedApplicants(id);
        console.log("Handling Acceptance", selectedAcceptedApplicants);
        // Show notification on the process to the next page
    }

    // Handle reject function
    const handleRejectApplicants = (id: Number): any => {
        // Clear list of applicants
        let selectedRejectedApplicants = getSelectedApplicants(id);
        console.log("Handling Rejected Applicants", selectedRejectedApplicants);
        // Show notification on the process to the next page
    }

    // Handle Applicant selection function
    const handleApplicantSelectionById = ({ e, _id }: { e: any; _id: Number; }): void => {

        // Obtain the list of Applicants
        let applicantsStatuses = applicants.map((applicant) => {
            // If item is checked
            // Pick by id match
            if (e.target.checked && applicant.id === _id) applicant.isSelected = true
            // Set a selection on the UI
            else
                if (!e.target.checked && applicant.id === _id) applicant.isSelected = false
            return applicant
        });
        // Store the object 
        setApplicants([...applicantsStatuses]);

        // if id is -1
        // Select all items to store.
        if (_id === -1 && e.target.checked)
            setApplicants([...applicants.map((applicant) => { applicant.isSelected = true; return applicant })])
        else
            setApplicants([...applicants.map((applicant) => { applicant.isSelected = false; return applicant })])

    }


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
                    {applicantLabels.map(({ label, isOpen }) => (
                        <DropDown key={label} classes={styles.dropDown} text={label} onClick={() => {
                            let newApplicantLabels: any[] = applicantLabels.map((applicant: { label: String, isOpen: Boolean }) => {
                                if (applicant.label === label) applicant.isOpen = !isOpen;
                                return applicant;
                            });
                            setApplicantLabels([...newApplicantLabels]);
                        }} isOpen={isOpen} />
                    ))}
                </section>

                <section className="grid grid-flow-row grid-cols-8">
                    <header className='grid grid-flow-col col-start-6 col-span-3 grid-rows-auto justify-self-end mb-10 place-items-center'>
                        {!makeSelectOptionsVisible && <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer text-center"
                            onClick={() => setMakeSelectOptionsVisible(!makeSelectOptionsVisible)}>
                            Select
                        </p>}
                        {makeSelectOptionsVisible && (<>
                            <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer text-center">
                                <CheckBox classes={styles.checkbox} onChange={(e) => { handleApplicantSelectionById({ e, _id: -1 }) }} />
                                Select all
                            </p>
                            <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer" onClick={() => handleAcceptApplicants(-1)}>Accept</p>
                            <p className="m-4 col-span-1 text-primary_green hover:cursor-pointer" onClick={() => handleRejectApplicants(-1)}>Reject</p>
                        </>
                        )}
                    </header>

                    {applicants.map(({ id, name, role, imageUrl }) => (
                        <div key={id} className='grid grid-flow-col grid-cols-7 col-span-full gap-2 grid-rows-auto justify-items-end mb-[52px]'>

                            {makeSelectOptionsVisible &&
                                <CheckBox classes={styles.checkbox} onChange={(e) => { handleApplicantSelectionById({ e, _id: id }) }} />
                            }
                            <div className={styles.applicantWrapper}>
                                <span className={styles.applicantDetails}>
                                    <span className="w-16 h-16 col-span-1">
                                        <Image src={imageUrl} />
                                    </span>
                                    <section className='col-span-3'>
                                        <h3 className='text-base font-semibold mb-[16px] '>{name}</h3>
                                        <p className="text-base mb-[22px] font-normal capitalize">{role}</p>
                                        <a href={id.toString()} className='text-sm underline font-semibold text-primary_green'>View Resume</a>
                                    </section>
                                </span>

                                <span className={styles.actionButtons}>
                                    <Button
                                        onClick={() => handleAcceptApplicants(id)}
                                        type="filled"
                                        bgColor="primary_green"
                                        color="white"
                                        text="Accept"
                                        classes="w-max px-3 h-10 md:px-6 xl:px-12 rounded-md text-sm 
                                    capitalize text-white bg-primary_green hover:opacity-80 leading-[22px]"
                                    />

                                    <Button
                                        onClick={() => handleRejectApplicants(id)}
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



export default Applicants;
import type { NextPage } from 'next';
import styles from 'styles/Applicants.module.scss';
import PropTypes, { InferProps } from "prop-types";
import Image from 'next/image';
import { BellIcon, GiftIcon } from '@heroicons/react/24/outline';
import AdminNavigation from 'components/molecules/Navigation/AdminNavigation';


import Button from 'components/atoms/Button/Button';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import DropDown from 'components/atoms/DropDown/DropDown';
import SearchBar from 'components/atoms/SearchBar/SearchBar';

import ProfileImage from 'assets/applications/ProfilePic.png';
import FrontDevLady from 'assets/applications/FrontDevLady.png';
import { useState } from 'react';


const Applicant = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    role: PropTypes.string,
    isSelected: PropTypes.bool
}


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
            name: "Jane Miysey",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        },
        {
            id: 3,
            name: "JMary Dekkoo",
            imageUrl: FrontDevLady,
            role: "DevOps Engineer",
            isSelected: false
        },
        {
            id: 4,
            name: "Jane Heuwolo",
            imageUrl: FrontDevLady,
            role: "Backend Developer",
            isSelected: false
        },
        {
            id: 5,
            name: "Hellen Miysey",
            imageUrl: FrontDevLady,
            role: "Front End Developer",
            isSelected: false
        }
    ])
    const [applicantLabels, setApplicantLabels] = useState([
        {
            label: 'Location',
            attributes: ["10km", "50km", "100km", "anywhere"],
            isOpen: false
        },
        {
            label: 'Salary',
            attributes: ["$0 - $40k", "$41k - $65k", "$66k - $159k", "$160k - above"],
            isOpen: false
        },
        {
            label: 'Job type',
            attributes: ["All Job Type", "Full-time", "Part-time", "Contract", "Internship", "Temporary", "Entry-Level"],
            isOpen: false
        },
        {
            label: 'Job Category',
            attributes: ["Intern", "Junior", "Senior", "Lead"],
            isOpen: false
        }
    ])

    const [queriedApplicants, setQueriedApplicants] = useState([...applicants])

    // QuerySearch on Applicant list
    const handleQueryApplicantsInList = (e: any) => {
        // Obtain the values from the search bar
        let queryValue = e.target.value;
        let queryApplicants;

        if (queryValue !== null) {
            // Obtain applicants based on  the query
            queryApplicants = applicants.filter((applicant) => (applicant.name.includes(queryValue) || applicant.role.includes(queryValue)));
            // Update list 
            // Hence displaying query results
            setQueriedApplicants([...queryApplicants]);
        }
    }

    // Obtain store of Applicants from store
    const getSelectedApplicants = (id: Number): InferProps<typeof Applicant[]> => {
        return applicants.filter((applicant) => (applicant.id === id && applicant.isSelected === true) || applicant.isSelected === true);
    }

    // Handle action function
    const handleAcceptApplicants = (id: Number) => {
        // Clear list of applicants
        let selectedAcceptedApplicants = getSelectedApplicants(id);
        console.log("Handling Acceptance", selectedAcceptedApplicants);
        // Show notification on the process to the next page
    }

    // Handle reject function
    const handleRejectApplicants = (id: Number) => {
        // Clear list of applicants
        let selectedRejectedApplicants = getSelectedApplicants(id);
        console.log("Handling Rejected Applicants", selectedRejectedApplicants);
        // Show notification on the process to the next page
    }

    // Obtain the applicant by id
    // Apply appropriate action
    const handleApplicantByIdWithAppropriateAction = (action: string, id: number) => {
        let applicantFound: any = applicants.find((applicant) => applicant.id === id);
        applicantFound.isSelected = true;

        // Accepted or rejected
        if (action === "Accept") {
            console.log("Accepted...", applicantFound);
            setApplicants([...applicants.filter((applicant) => applicant.id !== id)])
        }

        if (action === "Reject") {
            console.log("Rejected...", applicantFound);
            setApplicants([...applicants.filter((applicant) => applicant.id !== id)])
        }
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
        if (_id === -1) {
            if (e.target.checked)
                setApplicants([...applicants.map((applicant) => { applicant.isSelected = true; return applicant })])
            else
                setApplicants([...applicants.map((applicant) => { applicant.isSelected = false; return applicant })])
        }
    }


    return (
        <>
            {/* AdminNavigation */}
            <div className='grid grid-flow-col'>
                <AdminNavigation />

                <main className='grid grid-cols-1 gap-2 pt-8 px-16'>
                    <section className='grid grid-flow-row grid-cols-6 gap-3 mb-[60px] max-h-5'>
                        <SearchBar classes={styles.searchBar}
                            onChange={(e): any => handleQueryApplicantsInList(e)} />
                        <div className="grid grid-flow-col col-start-5 col-end-7 place-items-center">
                            <GiftIcon className="h-6 w-6 hover:cursor-pointer" />
                            <BellIcon className="h-6 w-6 hover:cursor-pointer" />
                            <DropDown imageUrl={ProfileImage} classes={styles.dropDown} text={"Ready to Interview"}
                                onClick={() => { setIsOpen(!isOpen); }} isOpen={isOpen} />
                        </div>
                    </section>

                    <section className="grid grid-flow-row grid-cols-6 gap-4 mb-[50px] max-h-5 z-10">
                        {applicantLabels.map(({ label, isOpen, attributes }) => (
                            <DropDown key={label} classes={styles.dropDown} text={label} onClick={() => {
                                let newApplicantLabels: any[] = applicantLabels.map((applicant: { label: String, isOpen: Boolean }) => {
                                    if (applicant.label === label) applicant.isOpen = !isOpen;
                                    return applicant;
                                });
                                setApplicantLabels([...newApplicantLabels]);
                            }} isOpen={isOpen} options={attributes} />
                        ))}
                    </section>

                    {queriedApplicants.length > 0 && (
                        <section className="grid grid-flow-row grid-cols-8 h-screen">
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

                            {queriedApplicants.map(({ id, name, role, imageUrl, isSelected }) => (
                                <div key={id} className='grid grid-flow-col grid-cols-7 col-span-full gap-2 grid-rows-auto justify-items-end mb-[52px]'>

                                    {makeSelectOptionsVisible &&
                                        <CheckBox classes={styles.checkbox} onChange={(e) => { handleApplicantSelectionById({ e, _id: id }) }} />
                                    }
                                    <div className={styles.applicantWrapper} style={{ background: isSelected ? ' rgba(217, 222, 220, 1)' : 'none' }}>
                                        <span className={styles.applicantDetails}>
                                            <span className="w-16 h-16 col-span-1">
                                                <Image src={imageUrl} alt={name} />
                                            </span>
                                            <section className='col-span-3'>
                                                <h3 className='text-base font-semibold mb-[16px] '>{name}</h3>
                                                <p className="text-base mb-[22px] font-normal capitalize">{role}</p>
                                                <a href={`applicants/${id.toString()}`} className='text-sm underline font-semibold text-primary_green'>View Resume</a>
                                            </section>
                                        </span>

                                        <span className={styles.actionButtons}>
                                            <Button
                                                onClick={() => handleApplicantByIdWithAppropriateAction("Accept", id)}
                                                type="filled"
                                                bgColor="primary_green"
                                                color="white"
                                                text="Accept"
                                                classes="w-max px-3 h-10 md:px-6 xl:px-12 rounded-md text-sm 
                                    capitalize text-white bg-primary_green hover:opacity-80 leading-[22px]"
                                            />

                                            <Button
                                                onClick={() => handleApplicantByIdWithAppropriateAction("Reject", id)}
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
                    )}
                    {queriedApplicants.length === 0 && (
                        <section className="grid grid-flow-row grid-cols-8 h-screen">
                            <header className='grid grid-flow-col col-start-1 col-span-5 justify-self-start py-10'>
                                <p className="text-xl opacity-75">Sorry, no match found!</p>
                            </header>
                        </section>
                    )}
                </main>

            </div>
        </>
    )
}



export default Applicants;
import type { NextPage } from 'next';
import styles from 'styles/Applicants.module.scss';
import PropTypes, { InferProps } from "prop-types";
import AdminLayout from "layouts/adminLayout";
import DropDown from 'components/atoms/DropDown/DropDown';
import React, { useState } from 'react';
import ApplicantsList from 'pages/applicants/applicants';
import FrontDevLady from 'assets/applications/FrontDevLady.png';


const Applicant = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.any,
    role: PropTypes.string,
    isSelected: PropTypes.bool
}


const Applicants: NextPage = () => {
    const [applicants, setApplicants] = useState<InferProps<typeof Applicant>[]>([
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

    // Show DropDownLabels function
    const displayDropDownLabel = (_label: string) => {
        let newApplicantLabels: any[] = applicantLabels.map((applicant: { label: String, 
            isOpen: Boolean, attributes: Array<String> }) => {
            if (applicant.label === _label) applicant.isOpen = !applicant.isOpen;
            else applicant.isOpen = false;
            return applicant;
        });
        setApplicantLabels([...newApplicantLabels]);
    }

    // Obtain store of Applicants from store
    const getSelectedApplicants = (id: Number): InferProps<typeof Applicant[]> => {
        return applicants.filter((applicant) => (applicant.id === id && applicant.isSelected === true) || applicant.isSelected === true);
    }

    return (
        <>
            <AdminLayout>
                <div className='grid grid-cols-1 gap-2 pt-8 grid-flow-row'>
                    {/* DropDown Labels */}
                    <section className="md:grid md:grid-flow-col md:grid-cols-3 lg:grid-cols-4 lg:grid-flow-col xl:grid-cols-6
                    gap-4 mb-[50px] md:max-h-5 z-20 overflow-visible">
                        {applicantLabels.map(({ label, isOpen, attributes }) => (<DropDown key={label}
                            classes={styles.dropDownWrapper} onClick={() => displayDropDownLabel(label)} text={label}
                            isOpen={isOpen} options={attributes} />
                        ))}
                    </section>

                    {/* Applicants List */}
                    <ApplicantsList applicants={applicants} setApplicants={setApplicants}
                        getSelectedApplicants={getSelectedApplicants} />
                </div>
            </AdminLayout>
        </>
    )
}



export default Applicants;
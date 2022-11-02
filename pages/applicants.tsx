import type { NextPage } from "next";
import styles from "styles/Applicants.module.scss";
import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";
import AdminLayout from "layouts/adminLayout";
import Button from "components/atoms/Button/Button";
import CheckBox from "components/atoms/CheckBox/CheckBox";
import DropDown from "components/atoms/DropDown/DropDown";
import FrontDevLady from "assets/applications/FrontDevLady.png";
import React, { useState } from "react";

const Applicant = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.any,
  role: PropTypes.string,
  isSelected: PropTypes.bool,
};

const Applicants: NextPage = () => {
  const [makeSelectOptionsVisible, setMakeSelectOptionsVisible] =
    useState<boolean>(false);
  const [applicants, setApplicants] = useState<InferProps<typeof Applicant>[]>([
    {
      id: 1,
      name: "JMary Dekkoo",
      imageUrl: FrontDevLady,
      role: "Front End Developer",
      isSelected: false,
    },
    {
      id: 2,
      name: "Jane Miysey",
      imageUrl: FrontDevLady,
      role: "Front End Developer",
      isSelected: false,
    },
    {
      id: 3,
      name: "JMary Dekkoo",
      imageUrl: FrontDevLady,
      role: "DevOps Engineer",
      isSelected: false,
    },
    {
      id: 4,
      name: "Jane Heuwolo",
      imageUrl: FrontDevLady,
      role: "Backend Developer",
      isSelected: false,
    },
    {
      id: 5,
      name: "Hellen Miysey",
      imageUrl: FrontDevLady,
      role: "Front End Developer",
      isSelected: false,
    },
  ]);
  const [applicantLabels, setApplicantLabels] = useState([
    {
      label: "Location",
      attributes: ["10km", "50km", "100km", "anywhere"],
      isOpen: false,
    },
    {
      label: "Salary",
      attributes: ["$0 - $40k", "$41k - $65k", "$66k - $159k", "$160k - above"],
      isOpen: false,
    },
    {
      label: "Job type",
      attributes: [
        "All Job Type",
        "Full-time",
        "Part-time",
        "Contract",
        "Internship",
        "Temporary",
        "Entry-Level",
      ],
      isOpen: false,
    },
    {
      label: "Job Category",
      attributes: ["Intern", "Junior", "Senior", "Lead"],
      isOpen: false,
    },
  ]);

  // Show DropDownLabels function
  const displayDropDownLabel = (_label: string) => {
    let newApplicantLabels: any[] = applicantLabels.map(
      (applicant: { label: String; isOpen: Boolean }) => {
        if (applicant.label === _label) applicant.isOpen = !applicant.isOpen;
        else applicant.isOpen = false;
        return applicant;
      }
    );
    setApplicantLabels([...newApplicantLabels]);
  };

  // QuerySearch on Applicant list function
  const handleQueryApplicantsInList = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Obtain the values from the search bar
    let queryValue = e.target.value;
    let queryApplicants;

    if (queryValue !== null) {
      // Obtain applicants based on  the query
      queryApplicants = applicants.filter(
        (applicant) =>
          applicant.name.includes(queryValue) ||
          applicant.role.includes(queryValue)
      );
      // Update list
      setQueriedApplicants([...queryApplicants]);
    }
  };

  // Obtain store of Applicants from store
  const getSelectedApplicants = (
    id: Number
  ): InferProps<typeof Applicant[]> => {
    return applicants.filter(
      (applicant) =>
        (applicant.id === id && applicant.isSelected === true) ||
        applicant.isSelected === true
    );
  };

  // Handle action function
  const handleAcceptApplicants = (id: Number) => {
    // Clear list of applicants
    let selectedAcceptedApplicants = getSelectedApplicants(id);
    console.log("Handling Acceptance", selectedAcceptedApplicants);
    // Show notification on the process to the next page
  };

  // Handle reject function
  const handleRejectApplicants = (id: Number) => {
    // Clear list of applicants
    let selectedRejectedApplicants = getSelectedApplicants(id);
    console.log("Handling Rejected Applicants", selectedRejectedApplicants);
    // Show notification on the process to the next page
  };

  // Obtain the applicant by id function
  const handleApplicantByIdWithAppropriateAction = (
    action: string,
    _id: number | null
  ) => {
    let applicantFound = applicants?.find((applicant) => applicant?.id === _id);
    applicantFound.isSelected = true;

    // Accepted or rejected
    if (action === "Accept") {
      console.log("Accepted...", applicantFound?.id);
      setApplicants([...applicants.filter(({ id }) => id !== _id)]);
    }

    if (action === "Reject") {
      console.log("Rejected...", applicantFound?.id);
      setApplicants([...applicants.filter(({ id }) => id !== _id)]);
    }
  };

  // Handle Applicant selection function
  const handleApplicantSelectionById = ({
    e,
    _id,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    _id: Number | null;
  }) => {
    // Obtain the list of Applicants
    let applicantsStatuses = applicants.map((applicant) => {
      if (e.target.checked && applicant.id === _id) applicant.isSelected = true;
      // Set a selection on the UI
      else if (!e.target.checked && applicant.id === _id)
        applicant.isSelected = false;
      return applicant;
    });
    // Store the object
    setApplicants([...applicantsStatuses]);

    // Select all items to store.
    if (_id === -1) {
      if (e.target.checked)
        setApplicants([
          ...applicants.map((applicant) => {
            applicant.isSelected = true;
            return applicant;
          }),
        ]);
      else
        setApplicants([
          ...applicants.map((applicant) => {
            applicant.isSelected = false;
            return applicant;
          }),
        ]);
    }
  };

  return (
    <>
      <AdminLayout>
        <div className="grid grid-cols-1 gap-2 pt-8">
          <section className="grid grid-flow-row grid-cols-6 gap-4 mb-[50px] max-h-5 z-10">
            {applicantLabels.map(({ label, isOpen, attributes }) => (
              <DropDown
                key={label}
                classes={styles.dropDown}
                text={label}
                onClick={() => displayDropDownLabel(label)}
                isOpen={isOpen}
                options={attributes}
              />
            ))}
          </section>

          {applicants.length > 0 && (
            <section className="grid grid-flow-row grid-cols-8">
              <header className="grid grid-flow-col col-start-6 col-span-3 grid-rows-auto justify-self-end  place-items-center">
                {!makeSelectOptionsVisible && (
                  <p
                    className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer text-center"
                    onClick={() =>
                      setMakeSelectOptionsVisible(!makeSelectOptionsVisible)
                    }
                  >
                    Select
                  </p>
                )}
                {makeSelectOptionsVisible && (
                  <>
                    <p className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer text-center">
                      <CheckBox
                        classes={styles.checkbox}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleApplicantSelectionById({ e, _id: -1 });
                        }}
                      />
                      Select all
                    </p>
                    <p
                      className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer"
                      onClick={() => handleAcceptApplicants(-1)}
                    >
                      Accept
                    </p>
                    <p
                      className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer"
                      onClick={() => handleRejectApplicants(-1)}
                    >
                      Reject
                    </p>
                  </>
                )}
              </header>

              {applicants.map(({ id, name, role, imageUrl, isSelected }) => (
                <div
                  key={id}
                  className="grid grid-flow-col grid-cols-12 col-span-full gap-2 grid-rows-auto justify-content-start mb-6 place-items-end"
                >
                  {makeSelectOptionsVisible && (
                    <CheckBox
                      classes={styles.checkbox}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleApplicantSelectionById({ e, _id: id });
                      }}
                    />
                  )}

                  <div
                    className={styles.applicantWrapper}
                    style={{
                      background: isSelected
                        ? " rgba(217, 222, 220, 1)"
                        : "none",
                    }}
                  >
                    <span className={styles.applicantDetails}>
                      <span className="w-18 h-18 col-span-1">
                        <Image src={imageUrl} alt={name?.toLocaleLowerCase()} />
                      </span>
                      <section className="col-span-3">
                        <h3 className="text-base font-semibold pb-1 pt-2">
                          {name}
                        </h3>
                        <p className="text-base mb-1 font-normal capitalize opacity-75">
                          {role}
                        </p>
                        <a
                          href={`applicants/${id?.toString()}`}
                          className="text-sm underline font-semibold text-primary_green"
                        >
                          View Resume
                        </a>
                      </section>
                    </span>

                    <span className={styles.actionButtons}>
                      <Button
                        onClick={() =>
                          handleApplicantByIdWithAppropriateAction("Accept", id)
                        }
                        type="filled"
                        bgColor="primary_green"
                        color="white"
                        text="Accept"
                        classes="w-100 px-10  h-10 rounded-md text-sm 
                                    capitalize text-white bg-primary_green hover:opacity-80 leading-[22px]"
                      />

                      <Button
                        onClick={() =>
                          handleApplicantByIdWithAppropriateAction("Reject", id)
                        }
                        type="bordered"
                        bgColor="white-2"
                        color="green"
                        text="Reject"
                        classes="w-100 px-10  h-10 ml-6 rounded-md border-2 border-green-900
                                 text-sm capitalize text-primary_green bg-white hover:opacity-80 leading-[22px]"
                      />
                    </span>
                  </div>
                </div>
              ))}
            </section>
          )}
          {applicants.length === 0 && (
            <section className="grid grid-flow-row grid-cols-8">
              <header className="grid grid-flow-col col-start-1 col-span-full justify-self-start py-10">
                <p className="text-xl opacity-50">
                  Sorry, no appplicants found!
                </p>
              </header>
            </section>
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default Applicants;

import React, { useState } from "react";
import type { NextPage } from "next";
import CheckBox from "components/atoms/CheckBox/CheckBox";
import DropDown from "components/atoms/DropDown/DropDown";
import ApplicantCard from "components/molecules/applicantCard/applicantCard";
import AdminLayout from "layouts/adminLayout";
import styles from "styles/Applicants.module.scss";
import { applicantsList } from "utils";

interface Applicant {
  id: string;
  name: string;
  imageUrl: any;
  role: string;
  isSelected: boolean;
}

const Applicants: NextPage = () => {
  const [makeSelectOptionsVisible, setMakeSelectOptionsVisible] =
    useState<boolean>(false);
  const [applicants, setApplicants] =
    React.useState<Applicant[]>(applicantsList);
  const [applicantLabels, setApplicantLabels] = useState<
    { label: string; attributes: Array<string>; isOpen: boolean }[]
  >([
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
    {
      label: "Experience",
      attributes: ["< 1 year", "1 - 3 years"],
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

  // Obtain store of Applicants from store
  const getSelectedApplicants = (id: string): Applicant[] => {
    return applicants.filter(
      (applicant) =>
        (applicant.id === id && applicant.isSelected === true) ||
        applicant.isSelected === true
    );
  };

  // Handle action function
  const handleAcceptApplicants = (id: string) => {
    // Clear list of applicants
    let selectedAcceptedApplicants = getSelectedApplicants(id);
    console.log("Handling Acceptance", selectedAcceptedApplicants);
    // Show notification on the process to the next page
  };

  // Handle reject function
  const handleRejectApplicants = (id: string) => {
    // Clear list of applicants
    let selectedRejectedApplicants = getSelectedApplicants(id);
    console.log("Handling Rejected Applicants", selectedRejectedApplicants);
    // Show notification on the process to the next page
  };

  // Obtain the applicant by id function
  const handleApplicantByIdWithAppropriateAction = (
    action: string,
    _id: string | null
  ) => {
    let applicantFound = applicants.find((applicant) => applicant?.id === _id);
    if (applicantFound) {
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
    }
  };

  // Handle Applicant selection function
  const handleApplicantSelectionById = ({
    e,
    _id,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    _id: string | null;
  }) => {
    // Obtain the list of Applicants
    let applicantsStatuses = applicants.map((applicant) => {
      if (e.target.checked && applicant.id === _id) applicant.isSelected = true;
      // Set a selection on the UI
      if (!e.target.checked && applicant.id === _id)
        applicant.isSelected = false;
      return applicant;
    });
    // Store the object
    setApplicants([...applicantsStatuses]);

    // Select all items to store.
    if (_id === "all") {
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
    <AdminLayout>
      <div className="w-full pt-8">
        <section className=" w-full  flex  mb-[50px] max-h-5 relative  z-30">
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
          <section className="w-full">
            <header className="w-full justify-end">
              {!makeSelectOptionsVisible && (
                <p
                  className="mx-5 mb-5 text-primary_green font-semibold hover:cursor-pointer text-right"
                  onClick={() =>
                    setMakeSelectOptionsVisible(!makeSelectOptionsVisible)
                  }
                >
                  Select
                </p>
              )}
              {makeSelectOptionsVisible && (
                <div className="flex w-full justify-end items-center h-12">
                  <div className="flex items-center text-primary_green hover:cursor-pointer ">
                    <CheckBox
                      classes={`mr-2`}
                      text="Select all"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleApplicantSelectionById({ e, _id: "all" });
                      }}
                    />
                  </div>
                  <div
                    className="mx-5 col-span-1 text-primary_green hover:cursor-pointer"
                    onClick={() => handleAcceptApplicants("all")}
                  >
                    Accept
                  </div>
                  <div
                    className="mx-5 col-span-1 text-primary_green hover:cursor-pointer"
                    onClick={() => handleRejectApplicants("all")}
                  >
                    Reject
                  </div>
                </div>
              )}
            </header>

            {applicants.map((applicant: Applicant) => (
              <div
                key={applicant.id}
                className="w-full flex items-center space-x-5 mb-7 "
              >
                {makeSelectOptionsVisible && (
                  <CheckBox
                    classes={styles.checkbox}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleApplicantSelectionById({ e, _id: applicant.id });
                    }}
                  />
                )}

                <div className="w-full">
                  <ApplicantCard
                    {...applicant}
                    acceptFn={() =>
                      handleApplicantByIdWithAppropriateAction(
                        "Accept",
                        applicant.id
                      )
                    }
                    rejectFn={() =>
                      handleApplicantByIdWithAppropriateAction(
                        "Reject",
                        applicant.id
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </section>
        )}
        {applicants.length === 0 && (
          <section className="grid grid-flow-row grid-cols-8">
            <header className="grid grid-flow-col col-start-1 col-span-full justify-self-start py-10">
              <p className="text-xl opacity-50">Sorry, no Appplicants found!</p>
            </header>
          </section>
        )}
      </div>
    </AdminLayout>
  );
};

export default Applicants;

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
                        handleApplicantSelectionById({ e, _id: "all" });
                      }}
                    />
                    Select all
                  </p>
                  <p
                    className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer"
                    onClick={() => handleAcceptApplicants("all")}
                  >
                    Accept
                  </p>
                  <p
                    className="mx-5 mb-5 col-span-1 text-primary_green hover:cursor-pointer"
                    onClick={() => handleRejectApplicants("all")}
                  >
                    Reject
                  </p>
                </>
              )}
            </header>

            {applicants.map((applicant: Applicant) => (
              <div
                key={applicant.id}
                className="grid grid-flow-col grid-cols-12 col-span-full gap-2 grid-rows-auto justify-content-start mb-6 place-items-end"
              >
                {makeSelectOptionsVisible && (
                  <CheckBox
                    classes={styles.checkbox}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleApplicantSelectionById({ e, _id: applicant.id });
                    }}
                  />
                )}

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
            ))}
          </section>
        )}
        {applicants.length === 0 && (
          <section className="grid grid-flow-row grid-cols-8">
            <header className="grid grid-flow-col col-start-1 col-span-full justify-self-start py-10">
              <p className="text-xl opacity-50">Sorry, no appplicants found!</p>
            </header>
          </section>
        )}
      </div>
    </AdminLayout>
  );
};

export default Applicants;

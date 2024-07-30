import React from "react";
import Image from "next/image";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingIcon from "../atoms/LoaingIcon";
import Modal from "../atoms/Modal/Modal";
import Button from "../atoms/Button/Button";
import { applyForJob, saveJob } from "@/api-endpoints/jobs/jobs.api";
import { Salary } from "@/api-endpoints/jobs/jobs.interface";
import typeIcon from "../../assets/icons/type.svg";
import locateIcon from "../../assets/icons/locate.svg";
import { Location } from "../Dashboard/recruiter/createJob/jobsData";
import { countryCodes } from "@/utils";

interface ApplyModalProps {
  company?: string;
  title?: string;
  location?: string;
  level?: string;
  type?: string | any;
  salary?: Salary;
  description?: string;
  requirement?: string;
  benefit?: string;
  open: boolean;
  salaryType: string | any;
  onClose: () => void;
  isApplied?: boolean;
}

enum Tabs {
  "Overview",
  "Application",
}

const JobApplicationModal: React.FC<ApplyModalProps> = ({
  company,
  title,
  location,
  level,
  type,
  salary,
  description,
  requirement,
  benefit,
  open,
  salaryType,
  isApplied,
  onClose,
}) => {
  const [tab, setTab] = React.useState<Tabs>(Tabs.Overview);
  const [fileName, setFileName] = React.useState<string>("")

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }
  const triggerFileUpload = () => {
    document.getElementById("fileInput")?.click()
  }
  const handleTabSwitch = (currentTab: Tabs): void => {
    setTab(currentTab);
  };

  const { mutate: applyMutation, isLoading: applyLoading } = useMutation({
    mutationFn: (jobId: string) => applyForJob(jobId),
    onSuccess: () => {
      toast.success("Job applied successfully ");
      onClose();
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
    },
  });

  const { mutate: saveMutation, isLoading: saveLoading } = useMutation({
    mutationFn: (jobId: string) => saveJob(jobId),
    onSuccess: () => {
      toast.success("Job saved successfully");
      onClose();
      // Additional logic after saving the job
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
    },
  });

  const onApplyForJob = () => {
    const jobId = sessionStorage.getItem("jobId");
    applyMutation(jobId as string);
  };

  const onSaveJob = () => {
    const jobId = sessionStorage.getItem("jobId");
    saveMutation(jobId as string);
  };

  return (
    <Modal isOpen={open} setIsOpen={onClose} dialogPanelClass="w-2xl max-w-2xl">
      <div className="px-12 py-6">
        <div>
          <h1 className="text-dark_black font-medium  text-lg md:text-5xl text-center">
            {company}
          </h1>
          <p className="mt-2 text-grey_3 text-lg text-center font-medium capitalize">
            {title}
          </p>
        </div>
        {tab == Tabs.Overview ? (
          <div className="mt-8 flex justify-around">
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-lg">Location</span>
              </div>
              <p className="text-primary_green font-bold text-lg ml-8 mt-1">
                {location}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-lg">Level</span>
              </div>
              <p className="text-primary_green font-bold text-lg ml-8 mt-1">
                {level}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={typeIcon} alt="icon" />
                <span className="text-grey_3 text-lg">Type</span>
              </div>
              <p className="text-primary_green font-bold text-lg ml-8 mt-1">
                {type}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-lg">Salary</span>
              </div>
              <p className="text-primary_green font-bold text-lg ml-8 mt-1">
                {salaryType && (
                  <span>
                    {salaryType === "range"
                      ? `${salary?.min} - ${salary?.max}`
                      : ` ${salary?.amount}`}
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <div className="flex items-center justify-center gap-2 px-12 mt-12">
          <div
            onClick={() => handleTabSwitch(Tabs.Overview)}
            className="w-full text-center space-y-1 cursor-pointer"
          >
            <div
              className={`${tab === Tabs.Overview ? "bg-primary_green" : "bg-grey_2"
                } rounded-full h-1`}
            ></div>
            <p className="font-medium text-sm text-grey_5">OVERVIEW</p>
          </div>
          <div
            onClick={() => handleTabSwitch(Tabs.Application)}
            className="w-full text-center space-y-1 cursor-pointer"
          >
            <div
              className={`${tab === Tabs.Application ? "bg-primary_green" : "bg-grey_2"
                } rounded-full h-1`}
            ></div>
            <p className="font-medium text-sm text-grey_5">APPLICATION</p>
          </div>
        </div>

        {tab === Tabs.Overview ? (
          <div className="px-12">
            <div className="py-12">
              <div className="py-4">
                <h3 className="text-dark_black font-bold text-base">
                  JOB DESCRIPTION
                </h3>
                <p className="text-base text-dark_black mt-2">{description}</p>
              </div>
              <div className="py-4">
                <h3 className="text-dark_black font-bold text-base">
                  REQUIREMENTS
                </h3>
                <p className="text-base text-dark_black mt-2">{requirement}</p>
              </div>
              <div className="py-4">
                <h3 className="text-dark_black font-bold text-base">
                  BENEFITS
                </h3>
                <p className="text-base text-dark_black mt-2">{benefit}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-3 items-center">
              <Button
                text={"Save"}
                onClick={onSaveJob}
                classes={
                  "border border-solid text-sm border-[#0D5520] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                }
              >
                <span className="flex gap-4 mx-auto item-center justify-center">
                  {saveLoading && <LoadingIcon />} Save
                </span>
              </Button>
              {!isApplied && (
                <Button
                  onClick={() => handleTabSwitch(Tabs.Application)}
                  classes={
                    "bg-[#0D5520] text-sm text-[white] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                  }
                >
                  <span className="flex gap-4 mx-auto item-center justify-center">
                    {applyLoading && <LoadingIcon />} Apply
                  </span>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {tab === Tabs.Application ? (
          <div className="px-4 mt-12">
            <form className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="first name" className="text-dark_blue">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-4 border rounded-md"
                  />
                </div>
                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="last name" className="text-dark_blue">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-4 border rounded-md"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="email" className="text-dark_blue">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@someone.com"
                  className="p-4 border rounded-md"
                />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="job title" className="text-dark_blue">
                  Job Title
                </label>
                <input type="text" className="p-4 border rounded-md capitalize" disabled defaultValue={title} />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="country" className="text-dark_blue">
                  Country
                </label>
                <select name="country" id="country" className="px-4 py-5 bg-white border rounded-md">
                  {Location.map((locate: any) => (
                    <option key={locate.label} value={locate.value}>{locate.label}</option>

                  ))}
                </select>
              </div>
              <div className="flex ">
                <div className="w-1/4 flex flex-col space-y-1">
                  <label htmlFor="first name" className="text-dark_blue">
                    Country code
                  </label>
                  <select name="country" id="country" className="px-4 py-4 bg-white border rounded-md w-3/4">
                    {countryCodes.map((country: any) => (
                      <option key={country.label} value={country.value}>{country.label}</option>

                    ))}
                  </select>
                </div>

                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="phone number" className="text-dark_blue">
                    Phone number
                  </label>
                  <input type="text" className="p-4 border rounded-md " />
                </div>

              </div>

              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="upload resume" className="text-dark_blue">
                  Upload resume
                </label>
                <div className="border-2 border-dashed bg-white rounded-md py-12 px-4 flex justify-center items-center cursor-pointer">
                  <input id="fileInput"
                    type="file" className="hidden" accept=".pdf, .doc, .docx" onChange={handleFileChange}
                  />
                  <p className="text-md text-grey_3">Drag & drop your files here or <span className="underline font-semibold cursor-pointer" onClick={triggerFileUpload}>browse</span></p>
                </div>
              </div>
              {fileName && (
                <div className="space-y-1">
                  <p className="text-primary font-bold">My Resume: {fileName}</p>
                </div>
              )}


              <div className="flex gap-4 items-center pt-12 justify-end">
                <Button
                  classes={
                    "border border-solid text-sm border-[#0D5520] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                  }
                >
                  <span className="flex gap-4 mx-auto item-center justify-center">
                    Clear
                  </span>
                </Button>

                <Button
                  classes={
                    "bg-[#0D5520] text-sm text-[white] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                  }
                >
                  <span className="flex gap-4 mx-auto item-center justify-center">
                    Submit
                  </span>
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    </Modal>
  );
};

export default JobApplicationModal;

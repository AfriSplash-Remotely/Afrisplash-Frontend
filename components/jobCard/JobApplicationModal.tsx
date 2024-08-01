import React from "react";
import Image from "next/image";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingIcon from "../atoms/LoaingIcon";
import Modal from "../atoms/Modal/Modal";
import Button from "../atoms/Button/Button";
import { applyForJobForm, saveJob } from "@/api-endpoints/jobs/jobs.api";
import { Salary } from "@/api-endpoints/jobs/jobs.interface";
import typeIcon from "../../assets/icons/type.svg";
import locateIcon from "../../assets/icons/locate.svg";
import { Location } from "../Dashboard/recruiter/createJob/jobsData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApplyJobSchema } from "@/schema/applyJob.schema";

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
  const [isDragging, setIsDragging] = React.useState<boolean>(false);


  const { handleSubmit, register, setValue, formState: { errors } } = useForm<ApplyJobSchema>({
    resolver: yupResolver(ApplyJobSchema)
  })

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
      setValue('resumeURL', file)
    }
  }
  const triggerFileUpload = () => {
    document.getElementById("fileInput")?.click()
  }
  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
    setIsDragging(false);
  };
  const handleTabSwitch = (currentTab: Tabs): void => {
    setTab(currentTab);
  };

  const { mutate: saveMutation, isLoading: saveLoading } = useMutation({
    mutationFn: (jobId: string) => saveJob(jobId),
    onSuccess: () => {
      toast.success("Job saved successfully");
      onClose();
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
    },
  });

  const useApplyForJob = () => {
    const queryClient = useQueryClient()
    return useMutation(applyForJobForm, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['applyJob', data.success])
        toast.success("Job applied successfully ");
        onClose();
      },
      onError: (error: AxiosError<{ error: any }>) => {
        toast.error(error?.response?.data?.error);
      },
    })
  }

  const mutation = useApplyForJob()

  const onSaveJob = () => {
    const jobId = sessionStorage.getItem("jobId");
    saveMutation(jobId as string);
  };

  const onSubmit = async (data: ApplyJobSchema) => {

    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }

    const jobId = sessionStorage.getItem("jobId") as string;
    const payload = data
    console.log({ data });
    try {
      await mutation.mutateAsync({ jobId, payload });
      console.log('Data posted successfully');
    } catch (error) {
      console.error('Error posting data', error);
    }


  }
  return (
    <Modal isOpen={open} setIsOpen={onClose} dialogPanelClass="w-2xl max-w-2xl">
      <div className="md:px-12 py-6">
        <div>
          <h1 className="text-dark_black font-medium  text-lg md:text-5xl text-center">
            {company}
          </h1>
          <p className="mt-2 text-grey_3 text-lg text-center font-medium capitalize">
            {title}
          </p>
        </div>
        {tab == Tabs.Overview ? (
          <div className="py-4 space-y-2 space-x-2  flex items-center  md:justify-around flex-wrap">
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-sm md:text-lg">Location</span>
              </div>
              <p className="text-primary_green font-bold text-sm md:text-lg ml-8 mt-1">
                {location}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-sm md:text-lg">Level</span>
              </div>
              <p className="text-primary_green font-bold text-sm md:text-lg ml-8 mt-1">
                {level}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={typeIcon} alt="icon" />
                <span className="text-grey_3 text-sm md:text-lg">Type</span>
              </div>
              <p className="text-primary_green font-bold text-sm md:text-lg ml-8 mt-1">
                {type}
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <Image src={locateIcon} alt="icon" />
                <span className="text-grey_3 text-sm md:text-lg">Salary</span>
              </div>
              <p className="text-primary_green font-bold text-sm md:text-lg ml-8 mt-1">
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

        <div className="flex items-center justify-center gap-2 md:px-12 mt-12">
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
          <div className="md:px-12">
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
                    {mutation.isLoading && <LoadingIcon />} Apply
                  </span>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {tab === Tabs.Application ? (
          <div className="md:px-4 mt-12">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-start gap-3 flex-wrap md:flex-nowrap">
                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="first name" className="text-dark_blue">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-4 border rounded-md"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p role="alert" className="error_message pl-2 py-2">
                      {(errors.firstName).message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="last name" className="text-dark_blue">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-4 border rounded-md"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p role="alert" className="error_message pl-2 py-2">
                      {(errors.lastName).message}
                    </p>
                  )}
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
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="error_message pl-2 py-2">
                    {(errors.email).message}
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="job title" className="text-dark_blue">
                  Job Title
                </label>
                <input type="text" className="p-4 border rounded-md capitalize" disabled defaultValue={title} {...register("jobTitle")} />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="country" className="text-dark_blue">
                  Country
                </label>
                <select id="country" className="px-4 py-5 bg-white border rounded-md" {...register("country")}>
                  {Location.map((locate: any) => (
                    <option key={locate.label} value={locate.value}>{locate.label}</option>

                  ))}
                </select>
                {errors.country && (
                  <p role="alert" className="error_message pl-2 py-2">
                    {(errors.country).message}
                  </p>
                )}
              </div>
              <div className="flex">
                <div className="w-full flex flex-col space-y-1">
                  <label htmlFor="phone number" className="text-dark_blue">
                    Phone number
                  </label>
                  <input type="text" className="p-4 border rounded-md " {...register("phoneNumber")} />
                  {errors.phoneNumber && (
                    <p role="alert" className="error_message pl-2 py-2">
                      {(errors.phoneNumber).message}
                    </p>
                  )}
                </div>

              </div>

              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="upload resume" className="text-dark_blue">
                  Upload resume
                </label>
                <div className="border-2 border-dashed bg-white rounded-md py-12 px-4 flex justify-center items-center cursor-pointer" onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}>
                  <input id="fileInput" {...register("resumeURL")}
                    type="file" className="hidden" accept=".pdf, .doc, .docx" onChange={handleFileChange}
                  />
                  <p className="text-md text-grey_3 text-center">Drag & drop your files here or <span className="underline font-semibold cursor-pointer" onClick={triggerFileUpload}>browse</span></p>
                </div>
                {errors.resumeURL && (
                  <p role="alert" className="error_message pl-2 py-2">
                    {(errors.resumeURL).message}
                  </p>
                )}
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
                  type="submit"
                  classes={
                    "bg-[#0D5520] text-sm text-[white] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                  }
                >
                  <span className="flex gap-4 mx-auto item-center justify-center">
                    {mutation.isLoading && <LoadingIcon />} Submit
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

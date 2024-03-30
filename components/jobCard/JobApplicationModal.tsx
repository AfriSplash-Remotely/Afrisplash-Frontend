import React from "react";
import Modal from "../atoms/Modal/Modal";
import Image from "next/image";
import typeIcon from "../../assets/icons/type.svg";
import locateIcon from "../../assets/icons/locate.svg";
import Button from "../atoms/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { applyForJob } from "@/api-endpoints/jobs/jobs.api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import LoadingIcon from "../atoms/LoaingIcon";
import { saveJob } from "@/api-endpoints/jobs/jobs.api";
import { Salary } from "@/api-endpoints/jobs/jobs.interface";

interface ApplyModalProps {
  company?: string;
  title?: string;
  location?: string;
  level?: string;
  type?: string | any;
  salary?: Salary;
  description?:string;
  requirement?:string;
  benefit?:string;
  open: boolean;
  salaryType: string;
  onClose: () => void;
  isApplied?:boolean
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
  
  const { data: session } = useSession()

  const { mutate: applyMutation, isLoading: applyLoading } = useMutation({
    mutationFn: (jobId: string) => applyForJob(jobId, session?.user?.accessToken as string),
    onSuccess: (data) => {
      toast.success("Job applied successfully ")
      onClose()
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
    }
  })

  const { mutate: saveMutation, isLoading: saveLoading } = useMutation({
    mutationFn: (jobId: string) => saveJob(jobId, session?.user?.accessToken as string),
    onSuccess: (data) => {
      toast.success("Job saved successfully")
      onClose()
      // Additional logic after saving the job
    },
    onError: (error: AxiosError<{ error: any }>) => {
      toast.error(error?.response?.data?.error);
      
    }
  })

  const onApplyForJob = (e: any) => {
    e.preventDefault()
    console.log('Apply for job');

    const jobId = sessionStorage.getItem("jobId")
    applyMutation(jobId as string)
  }

  const onSaveJob = (e: any) => {
    e.preventDefault()
    console.log('Save job');

    const jobId = sessionStorage.getItem("jobId")
    saveMutation(jobId as string)
  }


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
        <div className="mt-8 flex justify-around">
          <div>
            <div className="flex gap-2">
              <Image src={locateIcon} alt="icon" />
              <span className="text-grey_3 text-lg">Location</span>
            </div>
            <p className="text-primary_green  font-bold text-lg ml-8 mt-1">
              {location}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <Image src={locateIcon} alt="icon" />
              <span className="text-grey_3 text-lg">Level</span>
            </div>
            <p className="text-primary_green  font-bold text-lg ml-8 mt-1">
              {level}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <Image src={typeIcon} alt="icon" />
              <span className="text-grey_3 text-lg">Type</span>
            </div>
            <p className="text-primary_green  font-bold text-lg ml-8 mt-1">
              {type}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <Image src={locateIcon} alt="icon" />
              <span className="text-grey_3 text-lg">Salary</span>
            </div>
            <p className="text-primary_green  font-bold text-lg ml-8 mt-1">
              {
                salaryType && (<span>
                  
                  {
                    salaryType === "range" ? `${salary?.min} - ${salary?.max}` : ` ${salary?.amount}`
                  }
                  </span>
                )
             }
            
            </p>
          </div>
        </div>

        <div className="py-12 px-12">
          <div className="py-4">
            <h3 className="text-dark_black font-bold text-base">
              JOB DESCRIPTION
            </h3>
            <p className="text-base text-dark_black mt-2">
              {description}
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-dark_black font-bold text-base">
              REQUIREMENTS
            </h3>
            <p className="text-base text-dark_black mt-2">
              {requirement}
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-dark_black font-bold text-base">BENEFITS</h3>
            <p className="text-base text-dark_black mt-2">
              {benefit}
            </p>
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
            <span className="flex gap-4 mx-auto item-center justify-center">{saveLoading && <LoadingIcon />} Save</span>
          </Button>
          {
            !isApplied && (
              <Button
                onClick={onApplyForJob}
                classes={
                  "bg-[#0D5520] text-sm text-[white] px-12 py-2 rounded-lg w-1/2  md:w-auto"
                }
              >
                <span className="flex gap-4 mx-auto item-center justify-center">{applyLoading && <LoadingIcon />} Apply</span>
              </Button>
            )
          }
       
        </div>
      </div>
    </Modal>
  );
};

export default JobApplicationModal;

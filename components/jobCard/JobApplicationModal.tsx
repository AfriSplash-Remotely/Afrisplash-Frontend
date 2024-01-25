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


interface ApplyModalProps {
  company?: string;
  title?: string;
  location?: string;
  level?: string;
  type?: string;
  salary?: string;
  description?:string;
  requirement?:string;
  benefit?:string;
  open: boolean;
  onClose: () => void;
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
  onClose,
}) => {
  const { data: session } = useSession()

  const { mutate, isLoading } = useMutation({
    mutationFn: (jobId: string) => applyForJob(jobId, session?.user?.accessToken as string),
    onSuccess: (data) => {
      toast.success(data?.error)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        toast.error(error?.response?.data?.message)
      } else {
        toast.error(error?.message)
      }

    }

  })
  // const onApplyForJob = (e: any, jobId: string) => {
  //   const _id =
  // }

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
              {salary}
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
            text={"Share"}
            classes={
              "border border-solid text-sm border-[#0D5520] px-12 py-2 rounded-lg w-1/2  md:w-auto"
            }
          />
          <Button
            text={"Apply"}
            classes={
              "bg-[#0D5520] text-sm text-[white] px-12 py-2 rounded-lg w-1/2  md:w-auto"
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default JobApplicationModal;

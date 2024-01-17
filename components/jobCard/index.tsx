import React, { useState } from "react";
import { fetchJobDetails } from "@/api-endpoints/jobs/jobs.api";
import { useQuery } from "@tanstack/react-query";

import {
  CheckCircleIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import { HiBolt } from "react-icons/hi2";
import Button from "components/atoms/Button/Button";
import { capitalizeFirstLetter, formatTimeAgo, formatCurrency } from "@/utils/helper";
import { ACCOUNT_TYPE } from "@/utils";
import { useSession } from "next-auth/react";
import JobApplicationModal from "./JobApplicationModal";

const jobDataProps = {
  _id: PropTypes.string,
  image: PropTypes.string,
  company: PropTypes.string.isRequired,
  service: PropTypes.string,
  employees: PropTypes.number,
  offer: PropTypes.string.isRequired,
  // salary: PropTypes.shape({
  //   amount: PropTypes.number,
  //   currency: PropTypes.string,
  //   period: PropTypes.string,
  // }),
  salary: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  alt: PropTypes.string,
  status: PropTypes.string,
  promoted: PropTypes.bool,
  isDirectApply: PropTypes.bool,
  forDashboard: PropTypes.bool,
};

const JobCard = ({
  _id,
  image,
  company,
  service,
  employees,
  offer,
  salary,
  postDate,
  alt,
  isDirectApply,
  status,
  promoted,
  forDashboard = false,
}: InferProps<typeof jobDataProps>): JSX.Element => {
  const { data: session } = useSession()
  const [open, setOpen] = useState<boolean>(false)

  const { data, refetch } = useQuery(["jobDet"], async () => {  
    const data = await fetchJobDetails(_id as string)
    console.log(data, 'lol');
    return data
  }, { enabled: false })

  const handleModalOpen = () => {
    console.log('klleoe', _id);
    setOpen(!open)
    refetch()

  }
  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-3  mt-5">
        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-gray-50  border border-solid border-gray-300 rounded-xl">
              <Image
                src={image as string}
                alt={alt as string}
                width={35}
                height={35}
              />
            </div>
            <div>
              <div className="flex items-center mb-3">
                <h1 className="font-semibold text-base">
                  {capitalizeFirstLetter(company)}
                </h1>{" "}
                {promoted === true && forDashboard && (
                  <div className="bg-amber-500/20 py-1 px-4 mx-6 rounded-full text-xs font-medium">
                    PROMOTED
                  </div>
                )}
              </div>
              <p className="mt-1 text-base">{service}</p>
              <div className="flex items-center gap-2 mt-2">
                <UserGroupIcon className="w-4 h-4 opacity-60" />
                <p className="opacity-60 text-xs">{employees} EMPLOYEES</p>
              </div>
            </div>
          </div>
          {!forDashboard && (
            <div className="cursor-pointer">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-6 my-5">
          <div>
            {status === "Active" ? (
              <div className="flex items-center gap-2 bg-light_green p-2 rounded-full">
                <CheckCircleIcon className="w-5 h-5 bg-primary_green text-gray-200 rounded-full" />
                <p className="text-primary_green text-xs font-medium">
                  ACTIVELY HIRING
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4" />
                <p>NOT HIRING</p>
              </div>
            )}
          </div>
          {promoted === true && !forDashboard && (
            <div className="bg-amber-500/20 py-3 px-5 rounded-full text-xs font-medium">
              PROMOTED
            </div>
          )}
          {isDirectApply === true && (
            <div className="flex gap-2 bg-blue-500/20 text-blue-800 py-3 px-5 rounded-full text-xs font-medium">
              <HiBolt size="1rem" /> Direct Apply
            </div>
          )}
        </div>

        <div
          className={`flex  flex-wrap sm:flex-col md:flex-row sm:gap-3 items-center md:justify-between mt-3 py-3 px-5 rounded-2xl ${forDashboard ? "bg-zinc-200/40" : "bg-light_green"
            }`}
        >
          <div className="flex  flex-wrap sm:justify-between md:gap-40">
            <p className="font-[600] text-base w-full md:w-auto">
              {capitalizeFirstLetter(offer)}
            </p>
            <p className="font-[400] text-base">
              {/* {formatCurrency(salary?.amount ?? 0, salary?.currency ?? "$")} */}
              $ {salary}

            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center sm:justify-between w-full md:w-auto my-4 md:my-0">
            <p className="font-[400] text-xs hidden md:block">
              {formatTimeAgo(postDate)}
            </p>
            {session && session.user && session.user.userType === ACCOUNT_TYPE.candidate ?
              <>
                <div className="flex gap-3 w-full  items-center md:w-auto">
                  <Button
                    text={"Save"}
                    classes={
                      "border border-solid text-sm border-[#0D5520] px-4 py-1.5 rounded-lg w-1/2  md:w-auto"
                    }
                  />
                  <Button
                    onClick={handleModalOpen}
                    text={"Apply"}
                    classes={
                      "bg-[#0D5520] text-sm text-[white] px-4 py-1.5 rounded-lg w-1/2  md:w-auto"
                    }
                  />
                </div>
              </> : null}
              
          </div>
          <div className="font-normal text-xs block md:hidden ">
            {formatTimeAgo(postDate)}
          </div>
        </div>
      </div>
      <JobApplicationModal
        open={open}
        onClose={handleModalOpen}
        company={data?.data?._company}
        title={data?.title}
        location={data?.location}
        level={data?.experience}
        type={data?.type}
        salary={data?.salary} 
        description={data?.description}
        requirement={data?.requirement}
        />
    </>
  );
};

export default JobCard;

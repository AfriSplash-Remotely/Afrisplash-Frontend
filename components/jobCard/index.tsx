import React from "react";

import {
  CheckCircleIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import { HiBolt } from "react-icons/hi2";
import Button from "components/atoms/Button/Button";

const jobDataProps = {
  image: PropTypes.string,
  company: PropTypes.string,
  service: PropTypes.string,
  employees: PropTypes.string,
  offer: PropTypes.string,
  priceRange: PropTypes.string,
  postDate: PropTypes.string,
  alt: PropTypes.string,
  hiring: PropTypes.bool,
  promoted: PropTypes.bool,
  isDirectApply: PropTypes.bool,
  forDashboard: PropTypes.bool,
};

const JobCard = ({
  image,
  company,
  service,
  employees,
  offer,
  priceRange,
  postDate,
  alt,
  isDirectApply,
  hiring,
  promoted,
  forDashboard = false,
}: InferProps<typeof jobDataProps>) => {
  return (
    <div>
      <div className="border border-solid border-gray-300 rounded-3xl p-3  mt-5">
        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-gray-50  border border-solid border-gray-300 rounded-xl">
              <Image
                src={image as string}
                alt={alt as string}
                width="35px"
                height="35px"
              />
            </div>
            <div>
              <div className="flex items-center mb-3">
                <h1 className="font-semibold text-base">{company}</h1>{" "}
                {promoted === true && forDashboard && (
                  <div className="bg-amber-500/20 py-1 px-4 mx-6 rounded-full text-xs font-medium">
                    PROMOTED
                  </div>
                )}
              </div>
              <p className="mt-1 text-base">{service}</p>
              <div className="flex items-center gap-2 mt-2">
                <UserGroupIcon className="w-4 h-4 opacity-60" />
                <p className="opacity-60 text-xs">{employees}</p>
              </div>
            </div>
          </div>
          {!forDashboard && (
            <div className="cursor-pointer">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 my-5">
          <div>
            {hiring === true ? (
              <div className="flex items-center gap-2 bg-light_green p-2 rounded-full">
                <CheckCircleIcon className="w-5 h-5 bg-primary_green text-gray-200 rounded-full" />
                <p className="text-primary_green text-xs font-medium">
                  ACTIVELY HIRING
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
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
          className={`flex sm:flex-col md:flex-row sm:gap-3 md:items-center md:justify-between mt-3 py-3 px-5 rounded-2xl ${
            forDashboard ? "bg-zinc-200/40" : "bg-light_green"
          }`}
        >
          <div className="flex sm:justify-between md:gap-40">
            <p className="font-[600] text-base">{offer}</p>
            <p className="font-[600] text-base">{priceRange}</p>
          </div>
          <div className="flex gap-4 items-center sm:justify-between">
            <p className="font-[600] text-xs">{postDate}</p>
            <div className="flex gap-3">
              <Button
                text={"Save"}
                classes={
                  "border border-solid border-[#0D5520] px-4 py-1.5 rounded-lg"
                }
              />
              <Button
                text={"Apply"}
                classes={"bg-[#0D5520] text-[white] px-4 py-1.5 rounded-lg"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

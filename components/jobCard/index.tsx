import React from "react";

import {
  CheckCircleIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import Button from "components/atoms/Button/Button";

const jobDataProps = {
  datas: Array<any>,
  alt: PropTypes.string,
};

const JobCard = ({ datas, alt }: InferProps<typeof jobDataProps>) => {
  return (
    <div>
      {datas.flatMap((data: any) => {
        return (
          <div className="border border-solid border-gray-300 rounded-3xl p-3  mt-5">
            <div className="flex justify-between ">
              <div className="flex items-center gap-3">
                <div>
                  <Image src={data.image} alt={alt as string} />
                </div>
                <div>
                  <h1 className="font-semibold text-base">{data.company}</h1>
                  <p className="mt-1 text-base">{data.service}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <UserGroupIcon className="w-4 h-4 opacity-60" />
                    <p className="opacity-60 text-xs">{data.employees}</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer">
                <ChevronRightIcon className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <div>
                {data.hiring === true ? (
                  <div className="flex items-center gap-2 bg-[#CFDDD2] p-2 rounded-full">
                    <CheckCircleIcon className="w-5 h-5 bg-[#0D5520] text-gray-200 rounded-full" />
                    <p className="text-[#0D5520] text-xs font-medium">
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
              <div className="bg-[#FFC42D33] py-3 px-5 rounded-full text-xs font-medium">
                {data.promoted === true ? "PROMOTED" : ""}
              </div>
            </div>

            <div className="flex sm:flex-col md:flex-row sm:gap-3 md:items-center md:justify-between mt-3 bg-[#F1F9F3] py-3 px-5 rounded-2xl">
              <div className="flex sm:justify-between md:gap-40">
                <p className="font-[600] text-base">{data.offer}</p>
                <p className="font-[600] text-base">{data.priceRange}</p>
              </div>
              <div className="flex gap-4 items-center sm:justify-between">
                <p className="font-[600] text-xs">{data.postDate}</p>
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
        );
      })}
    </div>
  );
};

export default JobCard;

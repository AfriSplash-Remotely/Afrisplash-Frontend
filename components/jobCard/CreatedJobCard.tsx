import React from 'react'
import PropTypes, { InferProps } from "prop-types";
import { HiBolt } from "react-icons/hi2";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { capitalizeFirstLetter, formatTimeAgo, formatCurrency } from "@/utils/helper";

const createJobCardProps = {
  _id: PropTypes.string,
  title: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  status: PropTypes.string,
  // salary: PropTypes.string,
  salary: PropTypes.shape({
    amount: PropTypes.number,
    currency: PropTypes.string,
    period: PropTypes.string,
    min: PropTypes.number || PropTypes.string,
    max: PropTypes.number || PropTypes.string,
  }),

  location: PropTypes.string,
  promoted: PropTypes.bool,
  publish: PropTypes.bool,
  expiry: PropTypes.string,
  postDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

}

export default function CreatedJobCard({
  _id,
  title,
  industry,
  experience,
  status,
  salary,
  location,
  promoted,
  publish,
  expiry,
  postDate,
  type
}: InferProps<typeof createJobCardProps>): JSX.Element {
  return (
    <>
      <div className="bg-white rounded-xl border cursor-pointer border-gray-200 p-3  mt-5" >
        <div className="flex justify-between">
          <div className="px-6 flex items-center gap-3">
            <div>
              <div className="flex items-center mb-3">
                <h1 className="font-semibold text-lg">
                  {capitalizeFirstLetter(title)}
                </h1>

              </div>
              <p className="mt-1 text-base font-semibold">{capitalizeFirstLetter(industry)}</p>
              <p className="mt-1 text-base ">{capitalizeFirstLetter(experience)}</p>
              <p className="mt-1 text-base ">{capitalizeFirstLetter(type)}</p>

            </div>
          </div>
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
          {promoted === true && (
            <div className="bg-amber-500/20 py-3 px-5 rounded-full text-xs font-medium">
              PROMOTED
            </div>
          )}
          {publish === true && (
            <div className="flex gap-2 bg-blue-500/20 text-blue-800 py-3 px-5 rounded-full text-xs font-medium">
              <HiBolt size="1rem" /> Published
            </div>
          )}
        </div>

        <div
          className="flex  flex-wrap sm:flex-col md:flex-row sm:gap-3 items-center md:justify-between mt-3 py-3 px-5 rounded-2xl bg-light_green">
          <div className="flex  flex-wrap sm:justify-between md:gap-40">
            <p className="font-[400] text-base">
              {location}
            </p>
            <p className="font-[400] text-base">
              {/* {formatCurrency(salary?.min ?? 0, salary?.currency ?? "$")} */}
              {/* {salary?.currency}  {salary?.min } - {salary?.max} {salary?.period} */}
              {salary}

            </p>
            <p className="font-[400] text-base">
              {expiry}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center sm:justify-between w-full md:w-auto my-4 md:my-0">
            <p className="font-[400] text-xs hidden md:block">
              {formatTimeAgo(postDate)}
            </p>

          </div>
          <div className="font-normal text-xs block md:hidden ">
            {formatTimeAgo(postDate)}
            keie
          </div>
        </div>
      </div>
    </>
  )
}

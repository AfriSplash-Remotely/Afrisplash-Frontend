import React from 'react'
import PropTypes, { InferProps } from "prop-types";
import CreatedJobDetDrawer from './createdJobDetDrawer';
import { HiBolt } from "react-icons/hi2";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { capitalizeFirstLetter, formatTimeAgo } from "@/utils/helper";

const createJobCardProps = {
  _id: PropTypes.string,
  title: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  status: PropTypes.string,
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
  description: PropTypes.string,
  requirement: PropTypes.string,
  benefit: PropTypes.string,
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
  type,
  description,
  requirement,
  benefit,
}: InferProps<typeof createJobCardProps>): JSX.Element {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="bg-white rounded-xl border cursor-pointer border-gray-200 p-3  mt-5" onClick={handleDrawerOpen} >
        <div className="flex justify-between">
          <div className="px-6 flex items-center gap-3">
            <div>
              <div className="flex items-center mb-3">
                <h1 className="font-semibold text-lg">
                  {capitalizeFirstLetter(title)}
                </h1>
              </div>
              <div className='flex items-center gap-6 mt-1'>
                <div className="text-xs font-semibold py-1 px-4 rounded-full  text-primary_green">{capitalizeFirstLetter(industry)}</div>
                <div className="text-xs font-semibold  py-1 px-4 rounded-full text-primary_green">{capitalizeFirstLetter(experience)}</div>
                <div className="text-xs font-semibold py-1 px-4 rounded-full text-primary_green">{capitalizeFirstLetter(type)}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 py-4 my-5">
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
              {salary as any}
            </p>
            <p className="font-[400] text-base">
              Expires: {new Date(expiry as string).toDateString()}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center sm:justify-between w-full md:w-auto my-4 md:my-0">
            <p className="font-[400] text-xs hidden md:block">
              {formatTimeAgo(postDate)}
            </p>
          </div>
          <div className="font-normal text-xs block md:hidden ">
            {formatTimeAgo(postDate)}
          </div>
        </div>
      </div>

      <CreatedJobDetDrawer isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        industry={industry}
        experience={experience}
        type={type}
        description={description as string}
        requirement={requirement as string}
        benefit={benefit as string}
        location={location as string}
        salary={salary}
        expiry={expiry as string}
      />
    </>
  )
}

import React from "react";
import PropTypes, { InferProps } from "prop-types";
import CreatedJobDetDrawer from "./createdJobDetDrawer";
import { HiBolt } from "react-icons/hi2";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { formatTimeAgo } from "@/utils/helper";

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
};

export default function CreatedJobCard({
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="bg-white rounded-xl border cursor-pointer border-gray-200 p-6"
        onClick={handleDrawerOpen}
      >
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h1 className="font-semibold text-lg capitalize">{title}</h1>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold rounded-full  text-primary_green capitalize">
                {industry}
              </span>
              <span className="text-xs font-semibold  rounded-full text-primary_green capitalize">
                {experience}
              </span>
              <span className="text-xs font-semibold rounded-full text-primary_green capitalize">
                {type}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 -border border-red-400">
            <div>
              {status === "Active" ? (
                <div className="flex items-center gap-2 bg-light_green p-2 rounded-full">
                  <CheckCircleIcon className="w-4 h-4 bg-primary_green text-gray-200 rounded-full" />
                  <span className="text-primary_green text-xs font-medium">
                    ACTIVELY HIRING
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-full">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">NOT HIRING</span>
                </div>
              )}
            </div>
            {promoted === true && (
              <div className="bg-amber-500/20 p-2 rounded-full text-xs font-medium">
                <span className="text-xs font-medium">PROMOTED</span>
              </div>
            )}
            {publish === true && (
              <div className="flex items-center gap-2 bg-blue-500/20 text-blue-800 p-2 rounded-full text-xs font-medium">
                <HiBolt size="1rem" /><span className="text-xs font-medium"> Published</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap sm:flex-col md:flex-row sm:gap-3 md:items-center md:justify-between py-3 px-5 rounded-2xl bg-light_green">
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full space-y-3 md:space-y-0 md:space-x-3">
              <span className="font-normal text-sm md:text-base">{location ?? ''}</span>
              <span className="font-normal text-sm md:text-base">{salary as unknown as string ?? ''}</span>
              <span className="font-normal text-sm md:text-base">
                Expires: {new Date(expiry as unknown as string).toDateString()}
              </span>
              <span className="font-normal text-xs">
                {formatTimeAgo(postDate)}
              </span>
            </div>

          </div>
        </div>
      </div>

      <CreatedJobDetDrawer
        isOpen={isOpen}
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
  );
}

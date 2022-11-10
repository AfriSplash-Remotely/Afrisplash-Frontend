import React from "react";
import PropTypes, { InferProps } from "prop-types";

const PositionCardProps = {
  year: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function PositionCard({
  year,
  company,
  jobTitle,
  description,
}: InferProps<typeof PositionCardProps>): JSX.Element {
  return (
    <div className="py-6 px-4">
      <p className="text-base font-bold">{year}</p>
      <p className="text-base font-bold text-green-900">{company}</p>
      <p className="text-base leading-snug text-gray-500 my-2">{jobTitle}</p>
      <p className="w-80 text-base leading-snug text-gray-500 ">
        {description}
      </p>
    </div>
  );
}

export default PositionCard;

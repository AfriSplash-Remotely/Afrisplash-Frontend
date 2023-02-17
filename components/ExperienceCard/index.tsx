import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import AwardIcon from "assets/admin_icons/award.svg";
import EditIcon from "assets/admin_icons/edit-2.svg";
import PositionCard from "./PositionCard";

const ExperienceCardProps = {
  positions: PropTypes.array.isRequired,
};

function ExperienceCard({
  positions,
}: InferProps<typeof ExperienceCardProps>): JSX.Element {
  return (
    <div className="rounded-xl bg-white">
      <div className="flex w-full items-center p-4">
        <div className="w-9 h-9">
          <div className="flex items-center justify-center flex-1 h-full p-1.5 bg-green-900 rounded-xl">
            <div className="flex-1 h-full text-white">
              <div className="h-6 w-6 relative">
                <Image
                  src={AwardIcon}
                  alt="award-icon"
                  aria-hidden="true"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg font-bold w-full mx-1">Experience</p>
        <div className="w-6 h-6">
          <div className="flex items-center justify-center flex-1 h-full p-1 border rounded-lg border-gray-400">
            <div className="flex-1 h-6 w-6 relative rounded-full">
              <Image src={EditIcon} alt="edit-icon" aria-hidden="true" fill />
            </div>
          </div>
        </div>
      </div>
      {positions &&
        positions.map((position, index) => {
          return (
            <div key={position.id + index}>
              <PositionCard {...position} />
              {positions.length > index + 1 && (
                <hr className="h-0 w-full border-b border-gray-100" />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default ExperienceCard;

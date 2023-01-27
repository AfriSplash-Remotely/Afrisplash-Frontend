import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import styles from "./applicantCard.module.scss";
import Button from "../../atoms/Button/Button";

const ApplicantCardProps = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  acceptFn: PropTypes.func.isRequired,
  rejectFn: PropTypes.func.isRequired,
};
function ApplicantCard({
  id,
  name,
  imageUrl,
  role,
  isSelected,
  acceptFn,
  rejectFn,
}: InferProps<typeof ApplicantCardProps>) {
  return (
    <div
      className={`w-full border rounded-xl flex items-center p-5 px-10 `}
      style={{
        background: isSelected ? " rgba(217, 222, 220, 1)" : "none",
      }}
    >
      <div className={`w-full flex items-center `}>
        <div className="w-20 h-16 mr-12 col-span-1 relative rounded-xl	overflow-hidden">
          <Image
            src={imageUrl}
            alt={name.toLocaleLowerCase()}
            fill
          />
        </div>
        <section className="col-span-3">
          <h3 className="text-base font-semibold pb-1 pt-2">{name}</h3>
          <p className="text-base mb-1 font-normal capitalize opacity-75">
            {role}
          </p>
          <a
            href={`applicants/${id.toString()}`}
            className="text-sm font-semibold text-primary_green"
          >
            View Resume
          </a>
        </section>
      </div>

      <div className={`flex w-full justify-end`}>
        <Button
          onClick={acceptFn}
          type="filled"
          // bgColor="primary_green"
          color="white"
          text="Accept"
          classes="w-100 px-10  h-10 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80 leading-[22px]"
        />

        <Button
          onClick={rejectFn}
          type="bordered"
          // bgColor="white-2"
          color="green"
          text="Reject"
          classes="w-100 px-10  h-10 ml-6 rounded-md border-2 border-green-900 text-sm capitalize text-primary_green bg-white hover:opacity-80 leading-[22px]"
        />
      </div>
    </div>
  );
}

export default ApplicantCard;

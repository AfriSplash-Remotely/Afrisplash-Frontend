import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import dollar from "assets/co-workingSpace/dollar.svg";
import RateWorkSpace from "./RateWorkSpace";
import Link from "next/link";

const CoWorkingSpaceCardProps = {
  name: PropTypes.string,
  distance: PropTypes.string,
  amount: PropTypes.string,
  details: PropTypes.string,
  src: PropTypes.any,
  id: PropTypes.number
};

export default function CoWorkingSpaceCard({
  name,
  distance,
  amount,
  details,
  src,
  id
}: InferProps<typeof CoWorkingSpaceCardProps>): JSX.Element {
  return (
    <div className="w-full" key={id}>
      <div className="">
        <div className=" ">
          <Link
            href="/co-workingSpace/details"
          >
            <Image src={src} alt="chatIcon" className="w-full" />
          </Link>
        </div>
        <div className="lg:flex lg:justify-between mt-6">
          <div className="lg:flex ">
            <Link
              href="/co-workingSpace/details"
            >
            <h1 className="xlg:text-[30px] md:text-[20px] text-[30px]  text-[700] text-[#1F211D]">{name}</h1>
            </Link>
            <div className='xlg:mt-2 md:mt-0 mt-2 lg:ml-3'>
              <RateWorkSpace />
            </div>
          </div>
          <div className="flex lg:mt-0 mt-2">
            <Image src={dollar} alt="chatIcon" className="mr-2" />
            <span className="md:text-[24px] text-[18px] text-[700] md:mt-1  ">{amount}/hr</span>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <h5 className="text-[16px] text-[600] text-[#979797]">
            {distance} mins away
          </h5>
          <h5 className="mt-5 md:text-[19px] text-[16px] text-[400]">
            {details}
          </h5>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
// import chatIcon from "assets/forum/chatIcon.svg";
import dollar from "assets/co-workingSpace/dollar.svg";
import RateWorkSpace from "./RateWorkSpace";

const NearbyCardProps = {
  name: PropTypes.string,
  distance: PropTypes.string,
  amount: PropTypes.string,
  details: PropTypes.string,
  src: PropTypes.any,
};

export default function NearbyCard({
  name,
  distance,
  amount,
  src,
}: InferProps<typeof NearbyCardProps>): JSX.Element {
  return (
    <div className="w-full col-span-1">
      <div className="">
        <div className=" ">
          <Image src={src} alt="chatIcon" className="w-full "/>
        </div>
        <div className="lg:flex lg:justify-between mt-6">
          <div className="lg:flex ">
            <h1 className="xlg:text-[30px] md:text-[20px] text-[30px]  text-[700] text-[#1F211D]">{name}</h1>
            
          </div>
          <div className="flex lg:mt-0 mt-2">
            <Image src={dollar} alt="chatIcon" className="mr-2"/>
            <span className="md:text-[24px] text-[18px] text-[700] md:mt-1  ">{amount}/hr</span>
          </div>
        </div>
        <div className="mt-4 mb-6 flex lg:flex-row md:flex-col lg:justify-between md:justify-start justify-between">
          <h5 className="text-[16px] text-[600] mt-1 text-[#979797]">
              {distance} mins away
            </h5>
            <div className=''>
            <RateWorkSpace />
            </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import ReactStars from 'react-stars'
import dollar from "assets/co-workingSpace/dollar.svg";
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
          <div >
            <Link
              href="/co-workingSpace/details"
            >
              <h1 className="xlg:text-3xl md:text-xl text-3xl  font-bold text-[#1F211D]">{name}</h1>
            </Link>
          </div>
          <div className="flex lg:mt-0 mt-2">
            <Image src={dollar} alt="chatIcon" className="mr-2" />
            <span className="md:text-2xl text-lg font-bold md:mt-1  ">{amount}/hr</span>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <div className="lg:flex w-full justify-between items-center">
            <h5 className="text-base font-semibold text-[#979797]">
              {distance} mins away
            </h5>
            <div className='xlg:mt-2 md:mt-0 mt-2 lg:ml-3'>
              <ReactStars
                count={5}
                size={24}
                color2={'#ffd700'} />
            </div>
          </div>
          {
            details && <h5 className="mt-5 text-base">
              {details}
            </h5>
          }
        </div>
      </div>
    </div>
  );
}

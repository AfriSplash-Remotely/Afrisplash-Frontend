import React from 'react'
import Image from 'next/image'
import PropTypes, { InferProps } from "prop-types";
import Button from 'components/atoms/Button/Button'
import Institution from "assets/general/institution.svg"
import Locattion from "assets/general/location.svg"
import LogoWhite from "assets/general/logo-bg-white.svg"
import People from "assets/general/people.svg"


const CompHiringCardProps = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    inst: PropTypes.string,
    location: PropTypes.string,
    people: PropTypes.string
}

export default function CompHiringCard({ title, desc, inst, location, people }: InferProps<typeof CompHiringCardProps>): JSX.Element {
    return (
      <div className="border-2 border-primary_grey  rounded-lg p-14">
        <div className="flex flex-col justify-center  items-center">
          <Image src={LogoWhite} alt="logo" fill />

          <div className="mt-4 py-2">
            <h2 className="text-2xl text-center font-medium">{title}</h2>
            <p className="text-center mt-3">{desc}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-around  gap-8">
              <div className="flex">
                <Image src={Institution} alt="icon" />
                <h4>{inst}</h4>
              </div>
              <div className="flex ">
                <Image src={Locattion} alt="icon" />
                <h4>{location}</h4>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <Image src={People} alt="icon" />
              <h4>{people}</h4>
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="filled"
              // bgColor='primary_green'
              color="white"
              text="12 open roles"
              classes="w-64 h-10  md:w-64 xl:w-64 rounded-md text-sm capitalize  text-white bg-primary_green hover:opacity-80"
            />
          </div>
        </div>
      </div>
    );
}

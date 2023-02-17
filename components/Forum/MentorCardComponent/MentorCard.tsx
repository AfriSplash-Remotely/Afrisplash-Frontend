import React from 'react'
import Image from 'next/image'
import PropTypes, { InferProps } from "prop-types";
import bagIcon from "assets/forum/bagIcon.svg"
import chatIcon from "assets/forum/chatIcon.svg"
import heartIcon from "assets/forum/heartIcon.svg"
import supportIcon from "assets/forum/supportIcon.svg"

const MentorCardProps = {
    name: PropTypes.string,
    role: PropTypes.string,
    position: PropTypes.string,
    flag: PropTypes.any,
    src: PropTypes.string
}

export default function MentorCard({ name, role, position, flag, src }: InferProps<typeof MentorCardProps>): JSX.Element {
    return (
      <div
        className="w-full rounded-xl p-4 bg-cover shadow-sm  bg-no-repeat space-y-40 mt-2"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url(${src})`,
        }}
      >
        <div className="flex justify-between">
          <div className="p-4  rounded-full mentorCardBtn cursor-pointer">
            <div className="relative h-6 w-6">
              <Image src={chatIcon} alt="chatIcon" fill />
            </div>
          </div>
          <div className="p-4 rounded-full mentorCardBtn cursor-pointer">
            <div className="relative h-6 w-6">
              <Image src={heartIcon} alt="heartIcon" fill />
            </div>
          </div>
        </div>
        <div className="py-4 mt-3">
          <div className="flex  items-center">
            <h3 className="text-xl text-white_2 font-bold">{name}</h3>
            <div className="pl-2 pt-2">
              <Image alt={"ghana flag"} src={flag} height={20} width={20} />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="p-2  rounded-md mentorCardBtn">
              <div className="relative w-5 h-5">
                <Image src={bagIcon} alt="bagIcon" fill />
              </div>
            </div>
            <h5 className="pl-2 text-lg text-white_2 font-medium">
              {position}
            </h5>
          </div>
          <div className="mt-2 flex items-center">
            <div className="p-2  rounded-md mentorCardBtn">
              <div className="relative w-5 h-5">
                <Image src={supportIcon} alt="supportIcon" fill/>
              </div>
            </div>
            <h5 className="pl-2 text-lg truncate text-white_2 font-medium">
              {role}
            </h5>
          </div>
        </div>
      </div>
    );
}

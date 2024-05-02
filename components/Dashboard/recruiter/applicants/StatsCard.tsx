import React from "react";
import { BriefCase } from "@/assets/profile";
import { IconType } from "react-icons";

type StadCardT = {
  title: string;
  data: string;
  icon?: IconType;
};

export const ApplicantsStatsCard = (props: StadCardT): JSX.Element => {
  return (
    <div className="flex item items-center bg-white p-6 rounded-md gap-3">
      <BriefCase />
      <div className="gap-1 flex flex-col">
        <span className="text-sm md:text-base font-normal">{props.title}</span>
        <span className="text-xl md:text-3xl font-normal">{props.data}</span>
      </div>
    </div>
  );
};
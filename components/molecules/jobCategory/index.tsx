import React from "react";
import styles from "./jobCategory.module.scss";

interface CatProps {
  data: {
    Icon: any;
    name: string;
    openPositions: number;
  };
}

export default function JobCategory({
  data: { Icon, name, openPositions },
}: CatProps) {
  return (
    <div
      className={` my-3 h-20 lg:h-24 cursor-pointer bg-white rounded-lg flex ${styles.cat_item}`}
    >
      <section className="flex items-center px-3  space-x-4 h-full w-full">
        <div className="bg-primary_green h-10 px-3 rounded-md flex items-center">
          <Icon color="white" fontSize="1rem" />
        </div>
        <div className="capitalize">
          <div className="font-semibold text-base">{name}</div>
          <div className="text-sm text-gray-500">
            ({openPositions} open positions)
          </div>
        </div>
      </section>
    </div>
  );
}

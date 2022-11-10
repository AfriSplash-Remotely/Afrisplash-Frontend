import React from "react";
import styles from "./TalentSummary.module.scss";
import { FiHeart } from "react-icons/fi";
import { BiCommentDots } from "react-icons/bi";

export default function TalentSummary({ data }: any) {
  return (
    <section className={`h-84 my-3 ${styles.talent_image}`}>
      <div className={` h-full w-full relative`}>
        <img src={data.image.src} className="h-full w-full" />
        <div className="absolute top-0 left-0 w-full">
          <div className="flex justify-between w-11/12 mx-auto mt-3">
            <div className="dark_500 p-2 rounded-full">
              <BiCommentDots fontSize="1.5rem" color="white" />
            </div>
            <div className="dark_500 p-2 rounded-full">
              <FiHeart fontSize="1.5rem" color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

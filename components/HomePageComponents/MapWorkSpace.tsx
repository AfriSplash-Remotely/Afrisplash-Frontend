import React from "react";
import HomeMap from "assets/home-page/home_map.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import styles from "./styles.module.scss";
import { TFunction } from "i18next";

interface Props {
  translate: TFunction<"home", undefined>;
}

function MapWorkSpace({ translate }: Props): JSX.Element {
  return (
    <section className={`w-full ${styles.bg_gray} py-28`}>
      <div className="w-10/12 mx-auto flex flex-wrap justify-between items-center">
        <div className={`w-full md:w-6/12`}>
          <Image src={HomeMap} alt="home map" />
        </div>
        <div className={`w-full md:w-5/12 space-y-5`}>
          <h3 className="text-4xl w-9/12 font-medium">
            {translate("Your office away from the office")}
          </h3>
          <p className="w-10/12 text-gray-500">
            {translate(
              "Your remote work lifestyle deserves a workspace that supports it. That's why we've curated over 5000 workspaces across Africa you can choose from. Do your best work, no matter where you are"
            )}
          </p>
          <div className={`flex items-center space-x-6`}>
            <Button
              classes={`bg-dark_blue text-gray-200 py-4 px-10 rounded-lg`}
              text={translate("Lease a space")}
            />
            <Button classes={`flex space-x-1 items-center`}>
              <span>{translate("Find a space")}</span>{" "}
              <span>
                <ArrowRightIcon className="w-5 h-4 " />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapWorkSpace;

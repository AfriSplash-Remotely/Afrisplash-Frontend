import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "components/atoms/Button/Button";
import Timeline from "components/molecules/Timeline/Timeline";
import GeneralLayout from "layouts/generalLayout";
import React from "react";
import styles from "./PackagePlan.module.scss";
import ArrowDown from '../../../assets/icons/arrow-down.png';
import TickSquareIcon from '../../../assets/icons/tick-square.png'
import Image from "next/image";

const PackagePlan = () => {
  return (
    <GeneralLayout>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>Post a new job</h2>
        <p className={styles.subHeader}>Find your next great hire</p>
      </div>

      <Timeline />

      <div className={styles.midSection}>
        <h3 className={styles.h3}>Buy job posting package</h3>
        <div className={styles.midSectionContent}>
          <p className={styles.p}>Please select your preferred package</p>
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <th>Select</th>
          <th>Title</th>
          <th>Price</th>
          <th>Total jobs</th>
          <th>Job expiry</th>
          <th>Package expiry</th>
        </thead>
        <tr>
          <td><Image src={TickSquareIcon} alt='tick-square-con'/></td>
          <td>Golden</td>
          <td>Price</td>
          <td>Unlimited</td>
          <td className={styles.selectTableRow}>Select <Image src={ArrowDown} alt='arrow-down'/></td>
          <td></td>
        </tr>
        <tr>
          <td><Image src={TickSquareIcon} alt='tick-square-con'/></td>
          <td>Silver</td>
          <td>Price</td>
          <td>12</td>
          <td className={styles.selectTableRow}>Select <Image src={ArrowDown} alt='arrow-down'/></td>
          <td></td>
        </tr>
        <tr>
          <td><Image src={TickSquareIcon} alt='tick-square-con'/></td>
          <td>Premium</td>
          <td>Price</td>
          <td>5</td>
          <td className={styles.selectTableRow}>Select <Image src={ArrowDown} alt='arrow-down'/></td> 
          <td></td>
        </tr>
        <tr>
          <td><Image src={TickSquareIcon} alt='tick-square-con'/></td>
          <td>Standard</td>
          <td>Price</td>
          <td>2</td>
          <td className={styles.selectTableRow}>Select <Image src={ArrowDown} alt='arrow-down'/></td>
          <td></td>
        </tr>
      </table>

      <div className="flex space-x-4 items-center mb-5">
        <div className="hidden md:flex space-x-4 ml-96">
          <Button
            type="bordered"
            color="dark_blue"
            text="Update package"
            borderColor="dark_blue"
            classes="w-36 md:w-28 mr-96 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
          />
          <Button
            type="filled"
            bgColor="primary_green"
            color="white"
            text="Continue"
            classes="w-36 h-10 ml-48 md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
          />
        </div>
        <div className="flex lg:hidden h-full items-center">
          <Bars3Icon className="w-8 h-6" />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default PackagePlan;

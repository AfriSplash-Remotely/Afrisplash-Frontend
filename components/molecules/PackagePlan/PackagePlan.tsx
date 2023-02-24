import React from "react";
import Image from "next/image";
import Button from "components/atoms/Button/Button";
import styles from "./PackagePlan.module.scss";
import ArrowDown from "../../../assets/icons/arrow-down.png";
import TickSquareIcon from "../../../assets/icons/tick-square.png";

const PackagePlan = ({ renderNextForm }: any) => {
  return (
    <div className="sm:mx-auto">
      <div className={styles.packagePlanContainer}>
        <div
          className={`${styles.midSection} lg:mr-64 lg:ml-64 mx-16 px-8 my-5 space-y-3`}
        >
          <h3 className={`text-[20px] lg:text-[28px] ${styles.h3}`}>
            Buy job posting package
          </h3>
          <div className={styles.midSectionContent}>
            <p className={styles.p}>Please select your preferred package</p>
          </div>
        </div>

        <table
          className={`${styles.table}  mx-16 px-8 my-5 space-y-3 lg:mr-64 lg:ml-64 lg:w-7/12  md:w-5/6`}
        >
          <thead className={`${styles.thead} text-[11px] lg:text-[16px]`}>
            <tr>
              <th>Select</th>
              <th>Title</th>
              <th>Price</th>
              <th>Total jobs</th>
              <th>Job expiry</th>
              <th>Package expiry</th>
            </tr>
          </thead>

          <tbody
            className={`lg:w-7/12 md:w-5/6 sm:w-11/12 text-[11px] lg:text-[16px]`}
          >
            <tr>
              <td>
                <Image src={TickSquareIcon} alt="tick-square-con" />
              </td>
              <td>Golden</td>
              <td>Price</td>
              <td>Unlimited</td>
              <td className={styles.selectTableRow}>
                Select <Image src={ArrowDown} alt="arrow-down" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Image src={TickSquareIcon} alt="tick-square-con" />
              </td>
              <td>Silver</td>
              <td>Price</td>
              <td>12</td>
              <td className={styles.selectTableRow}>
                Select <Image src={ArrowDown} alt="arrow-down" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Image src={TickSquareIcon} alt="tick-square-con" />
              </td>
              <td>Premium</td>
              <td>Price</td>
              <td>5</td>
              <td className={styles.selectTableRow}>
                Select <Image src={ArrowDown} alt="arrow-down" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Image src={TickSquareIcon} alt="tick-square-con" />
              </td>
              <td>Standard</td>
              <td>Price</td>
              <td>2</td>
              <td className={styles.selectTableRow}>
                Select <Image src={ArrowDown} alt="arrow-down" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="flex space-x-4 items-center mb-5 lg:mr-96 lg:ml-52">
          <div className="hidden md:flex space-x-4 lg:mr-96">
            <Button
              type="bordered"
              color="dark_blue"
              text="Update package"
              classes="w-36 md:ml-16 lg:mr-96 md:mr-52 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
            />
            <div className={styles.continueBtn}>
              <Button
                type="filled"
                color="white"
                text="Continue"
                classes="w-36 h-10 xl:w-36 md:mr-32 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
                onClick={renderNextForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagePlan;

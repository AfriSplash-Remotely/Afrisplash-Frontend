import React from "react";
import { NextPage } from "next";
import {
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import GoogleMapApi from "components/googleMap";

import GeneralLayout from "layouts/generalLayout";
import CompanyImage from "assets/company/companyLogo.png";
import styles from "./index.module.sass";
import JobCard from "components/jobCard";
import GoogleLogo from "assets/company/googleLogo.png";
import JacobImage from "assets/teams/jacob.png";
import CameronImage from "assets/teams/cameron.png";
import WadeImage from "assets/teams/wade.png";
import RobertImage from "assets/teams/robert.png";
import StandardImage from "assets/company/standard.png";
import AlatImage from "assets/company/alat.png";
import HotelImage from "assets/company/hotels.png";
import PandascrowImage from "assets/company/pandascrow.png";

const jobData = [
  {
    image: GoogleLogo,
    company: "GOOGLE ",
    service: "Google search and other services",
    employees: "10-20  EMPLOYEES",
    hiring: true,
    promoted: true,
    offer: "UI/UX Designer",
    priceRange: "$100k - $300k",
    postDate: "2 MONTHS AGO",
  },
];

const teamData = [
  {
    name: "Jacob Jones",
    image: JacobImage,
    job: "Recruiter",
  },
  {
    name: "Cameron Williamson",
    image: CameronImage,
    job: "Recruiter",
  },
  {
    name: "Wade Warren",
    image: WadeImage,
    job: "Recruiter",
  },
  {
    name: "Robert Fox",
    image: RobertImage,
    job: "Recruiter",
  },
];

const jobOpeneingsData = [
  {
    image: PandascrowImage,
    position: "Product Manager",
    name: "Pandascrow",
    duration: "Contract/Hybrid",
  },
  {
    image: StandardImage,
    position: "Data Analyst",
    name: "Standard Chartered Bank Nigeria",
    duration: "Part time/Remote",
  },
  {
    image: StandardImage,
    position: "Product Designer",
    name: "Standard Chartered Bank Nigeria",
    duration: "Full time/Remote",
  },
  {
    image: HotelImage,
    position: "Network Analyst",
    name: "Hotels.ng",
    duration: "Contract/Hybrid",
  },
  {
    image: AlatImage,
    position: "Security Engineer",
    name: "ALAT by Wema",
    duration: "Full time/Onsite",
  },
];

const Company: NextPage = () => {
  return (
    <GeneralLayout>
      <section className="px-5 md:px-20 mb-20 pt-10">
        <div className="flex sm:flex-col md:flex-row items-center gap-4 ">
          <div className="flex items-center  gap-3 border-solid border border-gray-300 rounded-xl w-full max-w-lg p-3">
            <MagnifyingGlassIcon className="w-6 h-6 text-[#1C1D36]" />
            <input
              type="text"
              placeholder="Search companies"
              className="text-sm focus:outline-none"
            />
          </div>
          <div>
            <button className="flex items-center gap-3 bg-[#0D5520] px-3 py-3 w-44 rounded-xl">
              {" "}
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-50" />
              <span className="text-base text-gray-50"> Find Employer</span>
            </button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-5 border-solid border border-gray-300 rounded-xl py-2 pl-2">
            <div className="w-16 h-16">
              {" "}
              <Image src={CompanyImage} alt="company-image" />
            </div>
            <h2 className="font-semibold text-3xl">First Bank of Nigeria</h2>
          </div>

          <section className="flex sm:flex-col md:flex-row gap-5 my-6">
            <div className=" md:col-span-2  md:w-[65%]">
              <div className="grid grid-cols-2  border-solid border border-gray-300 rounded-xl  md:px-3 py-2">
                <div className={`${styles.divContainer}`}>
                  <MapPinIcon className={`${styles.icons}`} />
                  <div>
                    <h6 className={`${styles.font_h6}`}>Locations</h6>
                    <p className={`${styles.font_p}`}>Canada, USA</p>
                  </div>
                </div>
                <div className={`${styles.divContainer} `}>
                  <Squares2X2Icon className={`${styles.icons}`} />
                  <div>
                    <h6 className={`${styles.font_h6}`}>Markets</h6>
                    <p className={`${styles.font_p}`}>Finance, Investments</p>
                  </div>
                </div>
                <div className={`${styles.divContainer}`}>
                  <ClockIcon className={`${styles.icons}`} />
                  <div>
                    <h6 className={`${styles.font_h6}`}>Since</h6>
                    <p className={`${styles.font_p}`}>4days</p>
                  </div>
                </div>
                <div className={`${styles.divContainer}`}>
                  <UserGroupIcon className={`${styles.icons}`} />
                  <div>
                    <h6 className={`${styles.font_h6}`}>Company size</h6>
                    <p className={`${styles.font_p}`}>14</p>
                  </div>
                </div>
              </div>

              <div className=" mt-16">
                <h2 className="text-[#0D5520] text-3xl pb-3">About us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>

              <div className="mt-20">
                <h2 className="text-[#0D5520] text-[2rem]">Open jobs</h2>
                <JobCard datas={jobData} alt={"google image"} />
                <JobCard datas={jobData} alt={"google image"} />
              </div>

              <div className="mt-14 ">
                <div>
                  <h2 className="text-[#0D5520] text-[2rem]">Teams</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {teamData.flatMap((data): any => {
                    return (
                      <div className="flex items-center gap-4">
                        <div>
                          <Image src={data.image} alt="team" />
                        </div>
                        <div>
                          <p className="text-xl">{data.name}</p>
                          <p>{data.job}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="md:w-[35%] grid grid-cols-1 ">
              <div className="border border-solid border-[#D9DEDC] p-3 rounded-[20px]">
                <div>
                  <GoogleMapApi />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  <input
                    type="text"
                    placeholder="www.website-name.com "
                    className={`${styles.inputDiv}`}
                  />
                  <input
                    type="text"
                    placeholder="(000) 0000 0000"
                    className={`${styles.inputDiv}`}
                  />
                  <input
                    type="text"
                    placeholder="yourmail@mail.com"
                    className={`${styles.inputDiv}`}
                  />
                </div>
                <div className="flex mt-3 items-center gap-5 pl-3">
                  <FaLinkedin color="rgba(0, 0, 0, 0.34)" fontSize="1.5rem" />
                  <FaFacebook color="rgba(0, 0, 0, 0.34)" fontSize="1.5rem" />
                  <FaTwitter color="rgba(0, 0, 0, 0.34)" fontSize="1.5rem" />
                </div>
              </div>

              <div className="mt-14 ">
                <h2 className="pl-2 text-xl font-medium">Similar jobs</h2>
                <div className="grid grid-cols-1 gap-5 border border-solid border-[#D9DEDC] p-3 rounded-[20px] mt-4">
                  {jobOpeneingsData.flatMap((data): any => {
                    return (
                      <div className="flex items-center gap-3">
                        <Image src={data.image} alt="job image" />
                        <div>
                          <p className="text-xl">{data.position}</p>
                          <p className="text-[#606172] text-sm">{data.name}</p>
                          <p className="text-[#606172] text-sm">
                            {data.duration}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </GeneralLayout>
  );
};

export default Company;

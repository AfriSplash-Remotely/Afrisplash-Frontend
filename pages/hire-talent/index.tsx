/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import GeneralLayout from "layouts/generalLayout";
import styles from "styles/Hire-talent.module.scss";
import AppleLogo from "assets/hire-talent-assets/apple-logo.svg";
import ArrowLeft from "assets/hire-talent-assets/arrow-left.svg";
import BookIllustrator from "assets/hire-talent-assets/book-call-short-dashes-circles.svg";
import BlockQuote from "assets/hire-talent-assets/blockquote-xl.svg";
import CheckBox from "assets/hire-talent-assets/round-bold-check.svg";
import CallIcon from "assets/hire-talent-assets/call_calling.svg";
import EmailIcon from "assets/hire-talent-assets/envelope.svg";
import GoogleLogo from "assets/hire-talent-assets/google-logo.svg";
import HandShakeIcon from "assets/hire-talent-assets/handshake.svg";
import Img1 from "assets/hire-talent-assets/img_1.png";
import Img2 from "assets/hire-talent-assets/img_2.png";
import Img3 from "assets/hire-talent-assets/img_3.png";
import Img4 from "assets/hire-talent-assets/img_4.png";
import Img5 from "assets/hire-talent-assets/img_5.png";
import Img6 from "assets/hire-talent-assets/img_6.png";
import Img7 from "assets/hire-talent-assets/img_7.png";
import Img8 from "assets/hire-talent-assets/img_8.png";
import Metalogo from "assets/hire-talent-assets/Meta-Logo.svg";
import MicrosoftLogo from "assets/hire-talent-assets/Microsoft-logo.svg";
import NextArrow from "assets/hire-talent-assets/navigation-arrow-right.svg";
import PrevArrow from "assets/hire-talent-assets/navigation-arrow-left.svg";
import ReviewProfile from "assets/hire-talent-assets/review-profile.png";
import ReviewProfile2 from "assets/hire-talent-assets/review_profile2.png";
import ReviewProfile3 from "assets/hire-talent-assets/review_profile3.png";
import TechTalentIllustration from "assets/hire-talent-assets/bg-image-2812.png";
import TwitterLogo from "assets/hire-talent-assets/twitter-logo.svg";
import UserSearchIcon from "assets/hire-talent-assets/user-search.svg";
import VideoCallIcon from "assets/hire-talent-assets/video-call.svg";
import ContactModal from "@/components/molecules/ContactModal/contactModal";

const HireTalent: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle the isOpen state
  };
  return (
    <div className={styles.hireTalent}>
      <Head>
        <title>Afrisplash | Hire Talent</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />

        <section className="flex flex-col items-center justify-center text-center bg-[#FFF6E6]">
          <div className="absolute md:relative">
            <div className="hidden lg:block absolute left-[1.625rem] top-[11.813rem] w-[4.107rem] h-[4.107rem]">
              <Image
                src={Img5}
                className="w-[3.866rem] h-[3.866rem] rounded-[3.866rem]"
                alt=""
              />
            </div>
            <div className="hidden lg:block absolute left-[91%] xlg:left-[61.188rem] top-[21.438rem] w-[4.107rem] h-[4.107rem]">
              <Image
                src={Img4}
                className="w-[3.866rem] h-[3.866rem] rounded-[3.866rem]"
                alt=""
              />
            </div>
            <div className="hidden lg:block absolute left-[31.813rem] top-[79%] xlg:top-[32.438rem] w-[4.107rem] h-[4.107rem]">
              <Image
                src={Img6}
                className=" w-[3.866rem] h-[3.866rem] rounded-[3.866rem]"
                alt=""
              />
            </div>
            <div className="hidden lg:block absolute left-[85%] xlg:left-[57.813rem] top-[78%] xlg:top-[32.563rem] w-[4.107rem] h-[4.107rem]">
              <Image
                src={Img8}
                className=" w-[3.866rem] h-[3.866rem] rounded-[3.866rem]"
                alt=""
              />
            </div>
            <Image
              src={TechTalentIllustration}
              className="hidden xsm:block"
              alt=""
            />
          </div>
          <article className="static z-10 flex flex-col items-center justify-center gap-9 md:z-0 md:absolute px-5 py-24 xsm:p-24">
            <div className="flex flex-col items-center gap-6 text-center max-w-[47.563rem]">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                Find, Attract and Hire African Tech Talents
                <span className="text-[2.5rem]">🌍</span>
              </h1>
              <p className="w-10/12 text-lg">
                Get matched with remote-ready African talents from Africa&apos;s
                #1 remote work community🌍.
              </p>
            </div>

            <form className="flex flex-col md:flex-row justify-items-center items-center gap-3">
              <div className=" w-full max-w-[39.5rem]">
                <div className="relative">
                  <Image
                    src={EmailIcon}
                    className="absolute top-[1.125rem] inset-x-4"
                    alt=""
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-black text-start text-base w-full lg:w-[31.25rem] px-[3.438rem] py-[1.125rem] rounded-lg border-none bg-white"
                  placeholder="Email"
                />
              </div>
              <button className="w-full md:max-w-[7.5rem] font-semibold text-base leading-[1.188rem] text-center text-white cursor-pointer px-6 py-5 bg-primary_green rounded-lg border-none">
                Join Now
              </button>
            </form>
          </article>
        </section>
        <section className="flex flex-col items-center justify-center text-center">
          <article className="flex md:grid flex-col lg:grid-cols-2 md:grid-cols-1  justify-items-center items-center gap-[3.75rem] isolate px-6 py-36">
            <div className="hidden md:block md:relative justify-self-center">
              <div
                className={`absolute w-[5.813rem] h-[5.813rem] left-[25.107rem] lg:left-[70%]  top-[6.75rem]`}
              >
                <Image src={Img2} className="rounded-full" alt="" />
              </div>
              <div
                className={`absolute w-[3.875rem] h-[3.875rem] left-44 lg:left-[28%] top-[10.188rem] lg:top-[25%]`}
              >
                <Image src={Img1} className="rounded-full" alt="" />
              </div>
              <div
                className={`absolute w-20 h-20 left-[3.813rem] top-[27.5rem] lg:top-[80%]`}
              >
                <Image src={Img3} className="rounded-full" alt="" />
              </div>
              <div
                className={`absolute w-[4.875rem] h-[4.875rem] left-[23.313rem] lg:left-[60%] top-[24.75rem] lg:top-[70%]`}
              >
                <Image src={Img7} className="rounded-full" alt="" />
              </div>
              <Image src={BookIllustrator} alt="" />
            </div>
            <div className="flex flex-col justify-end items-start gap-9">
              <div className="flex flex-col justify-start text-start gap-6">
                <div>
                  <h2 className="w-10/12  text-2xl text-center md:text-left mx-auto md:mx-0 md:text-4xl font-semibold">
                    Get the best candidate profiles straight to your inbox
                  </h2>
                </div>
                <div className={`flex flex-col gap-4 w-100`}>
                  <p className="flex flex-row justify-items-center items-center leading-[1.375rem] gap-2.5 relative">
                    <span className="absolute left-0 text-secondary_yellow_2 text-2xl">
                      •
                    </span>
                    <span className="ml-6">
                      Connect with skilled African talents for full-time or
                      project-based employment.
                    </span>
                  </p>
                  <p className="flex flex-row justify-items-center items-center leading-[1.375rem] gap-2.5 relative">
                    <span className="absolute left-0 text-secondary_yellow_2 text-2xl">
                      •
                    </span>
                    <span className="ml-6">
                      Fill your direct sourcing pipeline with ready-to-work
                      candidates to reduce time-to-hire by 55%
                    </span>
                  </p>
                  <p className="flex flex-row justify-items-center items-center leading-[1.375rem] gap-2.5 relative">
                    <span className="absolute left-0 text-secondary_yellow_2 text-2xl">
                      •
                    </span>
                    <span className="ml-6">
                      Increase the quality of your hires by matching with
                      skills, experience, and personality traits pre-screening.
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={handleClick}
                className="flex flex-row justify-center items-center gap-3 max-w-xs max-h-16 cursor-pointer px-6 py-4 rounded-lg bg-primary_green"
              >
                <p className="font-semibold text-white">Talk to us</p>{" "}
                <Image src={ArrowLeft} alt="" />
              </button>
            </div>
          </article>
        </section>
        <section className="flex flex-col justify-center items-center gap-2.5 isolate px-8 md:px-[7.5rem] py-40 bg-gradient-to-r from-secondary_yellow_2 to-primary_green">
          <div className="flex flex-col items-center gap-9 max-w-[54.438rem] p-0">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-white_2">
              Hire directly from a pool of remote-ready tech talents all over
              Africa.
            </h2>
            <div className="flex flex-col md:flex-row justify-items-center items-center gap-8 p-0">
              <button
                className={`flex flex-row justify-center items-center gap-2 cursor-pointer px-8 py-[1.375rem] bg-white_2 rounded-lg border-none`}
              >
                <p className="font-semibold text-center text-primary_green">
                  View Talent Directory
                </p>
              </button>
              <button
                className={`flex flex-row justify-center items-center gap-2 cursor-pointer px-8 py-[1.375rem] border border-solid bg-transparent border-white_2 rounded-lg`}
              >
                <p className="font-semibold text-center text-white_2">
                  Request Talent Match
                </p>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-10 pt-[7.5rem] bg-white_3">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center lg:text-left lg:px px-6">
            Get matched with the best talents
          </h2>
          <div className="flex flex-col lg:flex-row justify-items-center items-center gap-6 xlg:max-w-auto max-w-full xlg:px-auto px-[5vw]">
            <article className="flex flex-col items-center gap-6 w-full xsm:w-[23.75rem] h-[18.813rem] text-center px-6 py-12 rounded-2xl bg-white">
              <Image src={UserSearchIcon} alt="" />
              <div>
                <h3 className="text-2xl font-semibold">View Talents</h3>
                <p className="pt-4">
                  Click <strong>View Talent Directory</strong> above to explore
                  our talent database
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center gap-6 w-full xsm:w-[23.75rem] h-[18.813rem] text-center px-6 py-12 rounded-2xl bg-white">
              <Image src={VideoCallIcon} alt="" />
              <div>
                <h3 className="text-2xl font-semibold">Schedule call</h3>
                <p className="pt-4">
                  Tell us the skills and experience you’re looking for in
                  addition to the salary, plus any other matters related to your
                  ideal talent.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center gap-6 w-full xsm:w-[23.75rem] h-[18.813rem] text-center px-6 py-12 rounded-2xl bg-white">
              <Image src={HandShakeIcon} alt="" />
              <div>
                <h3 className="text-2xl font-semibold">Get matched</h3>
                <p className="pt-4">
                  Our AI-powered platform will evaluate your preference against
                  the candidates to match you with the right fit
                </p>
              </div>
            </article>
          </div>
          <div className="flex justify-items-center items-center max-w-full">
            <button className="flex justify-between items-center text-white self-start cursor-pointer mt-[2.188rem] px-[2.625rem] py-4 bg-primary_green rounded-lg border-none">
              <Image src={CallIcon} alt="" />
              <span className="font-semibold ml-[1.125rem]">
                Book a call now
              </span>
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center gap-[3.75rem] bg-white_3 px-6 pb-[12.25rem]">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold max-w-[61.625rem] text-center mt-[9.375rem]">
            What remote-first companies say about the AfriSplash Remotely
            community
          </h2>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-center items-center xlg:max-w-auto max-w-full">
            <Image src={PrevArrow} className="hidden lg:block" alt="" />
            <article className="flex flex-col justify-around items-center w-full xsm:w-[21.25rem] max-w-full xsm:max-w-[30rem] h-full max-h-full mr-0 lg:mr-6 bg-white rounded-xl px-[1.375rem] py-[2.75rem]">
              <p className="text-lg font-medium">
                “Afrisplash Remotely is a great community, the team is super
                fantastic and helped me to find the best talent matching our
                expectations. We would love to keep engaging with the team and
                contribute as much as we can to grow this community.”
              </p>
              <div className="flex flex-row justify-center items-center self-baseline mt-[2.75rem] gap-3">
                <Image
                  src={ReviewProfile}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Princess Gabriel</p>
                  <p className="text-[0.9rem]">Founder @ Rootlo</p>
                </div>
              </div>
            </article>
            <article
              className={`relative flex flex-col justify-around items-center w-full xsm:w-[23.125rem] max-w-full xsm:max-w-[30rem] h-full max-h-[125%] mr-0 lg:mr-6 ${styles.linearGreenBg} rounded-xl px-[1.625rem] py-12 text-white_2`}
            >
              <div className="flex absolute self-baseline -top-[3.25rem]">
                <div>
                  <Image src={BlockQuote} alt="" />
                </div>
              </div>
              <p className="text-xl tracking-[0.031rem] mt-2.5">
                <strong>
                  “Afrisplash Remotely is a great community, the team is super
                  fantastic and helped me to find the best talent matching our
                  expectations. We would love to keep engaging with the team and
                  contribute as much as we can to grow this community.”
                </strong>
              </p>
              <div className="flex flex-row justify-center items-center self-baseline mt-12 gap-3">
                <Image
                  src={ReviewProfile2}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Ujjwal Singh</p>
                  <p className="mt-0">Founder @ Haulify</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col justify-around items-center w-full xsm:w-[21.25rem] max-w-full xsm:max-w-[30rem] h-full max-h-full m-0 bg-white rounded-xl px-[1.375rem] py-[2.75rem]">
              <p className="text-lg font-medium leading-[1.625rem] tracking-[0.031rem]">
                “Afrisplash Remotely is a great community, the team is super
                fantastic and helped me to find the best talent matching our
                expectations. We would love to keep engaging with the team and
                contribute as much as we can to grow this community.”
              </p>
              <div className="flex flex-row justify-center items-center self-baseline mt-[2.75rem] gap-3">
                <Image
                  src={ReviewProfile3}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Lucy Brian Anish</p>
                  <p className="text-[0.9rem]">Founder @ Anisha Groups</p>
                </div>
              </div>
            </article>
            <Image src={NextArrow} className="hidden lg:block" alt="" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center pt-10 px-0 pb-[0.625rem] text-center">
          <h3 className="text-2xl leading-[2.75rem] max-w-[72%] font-semibold pt-[3.75rem]">
            Work with talents who learn how to do remote work from industry
            leaders
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center pt-[4.375rem] md:px-0 px-6 pb-[3.75rem] gap-6 w-full max-w-[52.738rem]">
            <Image src={MicrosoftLogo} alt="" />
            <div className="flex flex-col md:flex-row justify-center items-center">
              <Image src={TwitterLogo} alt="" />
            </div>
            <Image src={Metalogo} alt="" />
            <div className="flex flex-col md:flex-row justify-center items-center">
              <Image src={AppleLogo} alt="" />
            </div>
            <Image src={GoogleLogo} alt="" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-middle pt-0 md:px-[6.875rem] pb-20 px-[1.875rem] ">
          <div className="flex md:flex-row justify-center items-middle p-0 gap-6  flex-col">
            <div className="flex items-center p-0 gap-3">
              <Image src={CheckBox} alt="" />
              <p className="text-base leading-[1.188rem] font-light">
                More remote talents within the community have access to global
                remote leaders.
              </p>
            </div>
            <div className="flex items-center p-0 gap-3">
              <Image src={CheckBox} alt="" />
              <p className="text-base leading-[1.188rem] font-light">
                We don&apos;t just offer you the top 1% of talent. We offer you
                grit, skill, creativity and the right fit.
              </p>
            </div>
            <div className="flex items-center p-0 gap-3">
              <Image src={CheckBox} alt="" />
              <p className="text-base leading-[1.188rem] font-light">
                We build on mutual trust to promote the remote working culture.
              </p>
            </div>
          </div>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default HireTalent;

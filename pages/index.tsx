import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "components/molecules/Header/Header";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import GeneralLayout from "layouts/generalLayout";
import styles from "styles/Home.module.scss";
import newsletter from "assets/images/newsletter.png";
import chipper from "assets/icons/chipper.svg";
import haulify from "assets/icons/haulify.svg";
import nextford from "assets/icons/nextford.svg";
import panther from "assets/icons/panther.svg";
import rootlo from "assets/icons/rootlo.svg";
import scopic from "assets/icons/scopic.svg";
import {
  jobCat,
  jobData,
  mentorsData,
  toArrayOfObjects,
  topTalentData,
} from "utils/fakeData";
import JobCard from "components/jobCard";
import JobCategory from "components/molecules/jobCategory";
import talentStars from "assets/home-page/talent_stars_bg.svg";
import talentUser from "assets/home-page/talent_user.svg";
import { MentorCard } from "@/components/Forum/MentorCardComponent";
import Button from "@/components/atoms/Button/Button";
import Link from "next/link";
import HomeMap from "assets/home-page/home_map.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { generateUniqueId } from "@/utils/helper";

const HomeJobs = () => {
  const homeJobData = toArrayOfObjects(jobData[0], 5);
  const homeJobCat = toArrayOfObjects(jobCat, 9);
  return (
    <section className={`w-full ${styles.bg_gray}`}>
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section className="space-y-10">
          <div className="text-center space-y-5">
            <h2 className="text-4xl font-semibold">Popular job categories</h2>
            <p className="text-gray-500">224 live | 49 added today</p>
          </div>
          <div className="w-full flex flex-wrap justify-between ">
            {homeJobCat.map((data: any) => (
              <JobCategory key={generateUniqueId()} data={data} />
            ))}
          </div>
        </section>
        <section className="space-y-16 ">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-semibold">Featured jobs</h2>
            <div className="text-gray-500">
              <p>Your dream remote job is an application away.</p>
              <p>
                Start applying to accessible opportunities that allows you live,
                work and succeed from anywhere.
              </p>
            </div>
          </div>
          <div className="w-full">
            {homeJobData.map(
              (data): JSX.Element => (
                <div key={generateUniqueId()}>
                  <JobCard
                    image={data.image}
                    alt={"company image"}
                    company={data.company}
                    service={data.service}
                    employees={data.employees}
                    offer={data.offer}
                    priceRange={data.priceRange}
                    postDate={data.postDate}
                    hiring={data.hiring}
                    promoted={data.promoted}
                  />
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

const Talents = () => {
  return (
    <section className="w-full ">
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section>
          <div className="text-center space-y-5">
            <h3 className="capitalize font-semibold text-4xl">
              our top talents
            </h3>
            <div className="text-gray-500 text-lg flex justify-center">
              <p className="w-6/12">
                Browse through the talent pool from our community and partners.
                Find tech and non-tech talents in weeks, not months.
              </p>
            </div>
          </div>
          <div className=" my-10 space-y-6">
            <div className="grid gap-6 lg:grid-cols-4">
              {topTalentData.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  name={mentor.name}
                  position={mentor.position}
                  role={mentor.role}
                  flag={mentor.flag}
                  src={mentor.src}
                />
              ))}
              <div
                className={`w-full rounded-xl p-4 bg-cover shadow-sm  bg-no-repeat space-y-10 mt-2 ${styles.createProfileCard}`}
              >
                <div className="flex justify-between items-start relative   pt-5">
                  <Image src={talentUser} alt="stars" width={60} height={60} />
                  <Image
                    className="absolute right-0"
                    src={talentStars}
                    alt="stars"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="w-8/12 font-semibold leading-10 text-3xl">
                  <h2>Become a top talent too</h2>
                </div>
                <div>
                  <Button
                    classes={`bg-primary_green text-white py-4 px-6 rounded-lg`}
                    text="Create your profile"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              {mentorsData.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  name={mentor.name}
                  position={mentor.position}
                  role={mentor.role}
                  flag={mentor.flag}
                  src={mentor.src}
                />
              ))}
            </div>
          </div>
          <div className="w-max mx-auto">
            <Link href="/" className=" text-gray-400 leading-8 border-b-2">
              See more
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

const MapWorkSpace = () => {
  return (
    <section className={`w-full ${styles.bg_gray} py-28`}>
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div className={`w-6/12`}>
          <Image src={HomeMap} alt="home map" />
        </div>
        <div className={`w-5/12 space-y-5`}>
          <h3 className="text-3xl w-9/12 font-semibold">
            The perfect workspace, just for you
          </h3>
          <p className="w-10/12 text-gray-500">
            Your remote work lifestyle deserves a workspace that supports it.
            That&apos;s why we&apos;ve curated over 5000 workspaces across
            Africa you can choose from. Do your best work, no matter where you
            are
          </p>
          <div className={`flex items-center space-x-6`}>
            <Button
              classes={`bg-dark_blue text-gray-200 py-4 px-10 rounded-lg`}
              text="Lease a space"
            />
            <Button classes={`flex space-x-1 items-center`}>
              <span>Find a space</span>{" "}
              <span>
                <ArrowRightIcon className="w-5 h-4 " />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {


  return (
    <section className={`w-full ${styles.bg_white} py-28`}>
      <div className="w-11/12 xl:w-10/12 mx-auto flex justify-center items-center">
        <div className="w-full pt-14">
          <h3 className="mx-auto text-center text-black-300 text-3xl font-semibold">
            Frequently Asked Questions
          </h3>
          <div className="rounded-2xl bg-white py-14 align-content-left">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white py-4 px-4 text-left text-xl font-medium text-black-900 hover:bg-info-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is Afrisplash Remotively about?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-info-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <p className="mx-auto text-center text-black-300 text-lg flex justify-center align-content-center mb-3">
            If you still can’t find the answers you’re looking for
          </p>
          <a href="/contact" className="mx-auto text-center text-green-800 text-lg font-semibold underline flex justify-center align-content-center">
            Contact Us!
          </a>
        </div>
      </div>
    </section>
  )
}

const Newsletter = () => {
  return (
    <section className={`w-full  bg-[#FFC42D]`}>
      <div className={`${styles.Newsletter} py-20  afri-container`}>
        <div className={`relative overflow-hidden flex w-full px-16 py-32 ${styles.Newsletterbx}`}>
          <div>
            <h3 className="text-3xl text-black font-semibold pb-14">
              Sign Up for our Newsletter
            </h3>

            <div className="flex flex-wrap justify-content-center justify-items-start gap-6 ">
              <div className="py-4 flex justify-content-center justify-items-start items-center  gap-6">
                <div className="relative">
                  <label>
                    Enter your Full Name:
                  </label>
                  <input
                    className="block outline-none w-full rounded border-2 bg-grey-50 py-2 px-3"
                    type="text"
                    placeholder="Firstname LastName"
                  />

                </div>

                <div className="relative mb-3 ">
                  <label>
                    Enter your Email:
                  </label>
                  <input
                    className="block outline-none w-full rounded border-2 bg-grey-50 py-2 px-3"
                    type="text"
                    placeholder="yourmail@mail.com"
                  />

                </div>


                <button className="block outline-none rounded-lg text-white bg-black py-3 px-8" type="submit">Get Notified
                </button>

              </div>



            </div>
          </div>
          <div className={`${styles.NewsletterImg} `}>
            <Image src={newsletter} alt="newsletter" />
          </div>
        </div>
      </div>
    </section>
  )
}

const Home: NextPage = () => {
  const globalCompanies = [chipper, nextford, haulify, panther, rootlo, scopic];

  return (
    <GeneralLayout>
      <Head>
        <title>Afrisplash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="w-full my-10 mt-32">
        <div className="w-10/12 mx-auto space-y-10">
          <h3 className="text-center text-gray-400 text-2xl font-light">
            Trusted by these global companies
          </h3>
          <div className="flex justify-between ">
            {globalCompanies.map((item: any) => (
              <div key={generateUniqueId()}>
                <Image src={item} alt="global companies" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <HomeJobs />
      <Talents />
      <MapWorkSpace />
      <Faq />
      <Newsletter />
    </GeneralLayout>
  );
};

export default Home;

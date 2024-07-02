/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GeneralLayout from "layouts/generalLayout";
import Ellipsis1 from "assets/about_us/Ellipse_bg_large.png"
import SmilingLady from "assets/about_us/lady_smiling_looking_and_at_laptop.png";
import Underline from "assets/about_us/underline.svg"

const AboutUs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Afrisplash | About Us</title>
              <meta name="description" content="The Gateway To Africa'S Remote Workforce"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        <section className="w-full h-full pt-20">
        <div className="bg-[url('../assets/about_us/bg_ellipsis.svg')] bg-cover bg-no-repeat">
            <div className="px-5">
            <div className="w-full flex flex-col justify-center items-center text-center pb-14">
                <h1 className="flex flex-col sm:text-6xl text-5xl font-bold pb-3">
                <span>Africa + Creativity =</span>
                <span className="text-primary_green">AfriSplash</span>
                </h1>
                <div className="flex justify-center items-center w-full h-full">
                <Image src={Underline} alt="" />
                </div>
                <p className="sm:text-2xl text-xl text-dark_blue pt-8">
                Live, Work & Succeed From Anywhere{" "}
                </p>
            </div>
            <div className="flex justify-center items-center pb-16">
                <div className="relative max-w-[30.313rem] max-h-[30.313rem]">
                <div>
                    <div className="flex justify-center items-center w-full h-full">
                    <Image src={Ellipsis1} alt="" />
                    </div>
                </div>
                <div className="absolute top-2 xsm:-right-5 xsm:left-auto">
                    <div className="flex justify-center items-center w-full h-full">
                    <Image src={SmilingLady} alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="flex xlg:flex-row flex-col justify-center items-center bg-dark_blue text-white sm:text-4xl text-3xl font-semibold text-center px-20 py-20">
            <article className="xlg:pb-0 xlg:px-16 pb-16 px-10">
                <h3>3K+</h3>
                <p>Community Members</p>
            </article>
            <article className="border-l-0 border-t xlg:border-t-0 xlg:border-l border-[#E0E0E0] xlg:py-0 xlg:px-16 py-16 px-10">
                <h3>100K+</h3>
                <p>Talent Network</p>
            </article>
            <article className="border-l-0 border-t xlg:border-t-0 xlg:border-l border-[#E0E0E0]  xlg:pt-0 xlg:px-16 pt-16 px-10">
                <h3>1K+</h3>
                <p>Hiring Companies</p>
            </article>
        </section>
        <section className="flex flex-col items-center justify-center text-center bg-white">
        <article className="shadow-[0px_5px_20px_rgba(28,29,54,0.11)] my-32 mx-24 w-10/12">
            <div
            className={`flex flex-col text-left sm:px-[4.625rem] px-10 py-20 bg-[url('../assets/about_us/transparent_logo_bg.png')] bg-contain bg-center bg-no-repeat`}
            >
            <h3 className="sm:text-[2rem] text-3xl font-semibold text-dark_blue pb-14">
                What does AfriSplash stand for as Africa’s NO 1 remote
                community
            </h3>
            <div className="flex flex-col gap-8 sm:text-lg text-base text-[#606172] font-medium">
                <p>
                AfriSplash harnesses the power of community and team spirit
                to empower young African talents from every part of the
                country. We uphold a diverse, inclusive and healthy
                environments fro talents from various ethnicity and career
                backgrounds to learn, make positive connections and achieve
                new milestones while working from various part of the
                continent.
                </p>
                <p>
                On a mission to create Africa’s largest remote ecosystem
                where Africa’s creative talents get to make their mark on
                the global stage with startups, founders and established
                companies all over the globe while working from anywhere
                </p>
                <p>
                <strong>BE THE CHANGE!</strong>
                </p>
            </div>
            </div>
        </article>
        </section>
      </GeneralLayout>
    </div>
  );
};

export default AboutUs;

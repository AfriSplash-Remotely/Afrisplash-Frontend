import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "assets/blog/hero.png";
import Button from "../atoms/Button/Button";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between bg-primary_yellow  px-4 md:flex-row-reverse md:px-10 xl:px-[110px]">
      <div className="h[100%] relative my-10 block w-[100%] md:w-[60%]">
        <Image src={HeroImage} alt="hero" priority layout="responsive" />
      </div>
      <div className="md:w-1/2 xl:w-1/3">
        <div className="my-7 mt-10 flex flex-row flex-wrap items-center gap-2">
          <Link href="" passHref>
            <Button
              tag="a"
              classes=" border-[1px] bg-[#FFC42D73] text-white rounded-lg text-sm w-[142px] max-w-[100%] h-[40px] flex flex-row items-center justify-center cursor-pointer hover:opacity-70"
            >
              Remote Jobs
            </Button>
          </Link>
          <Link href="" passHref>
            <Button
              tag="a"
              classes=" border-[1px] bg-[#FFC42D73] text-white rounded-lg text-sm w-[142px] h-[40px] flex flex-row items-center justify-center cursor-pointer hover:opacity-70"
            >
              International Jobs
            </Button>
          </Link>
        </div>
        <h1 className="text-[2rem] leading-[44px] md:max-w-[410px]">
          How to get International Remote Jobs easily without stress
        </h1>
        <div className="items-cente my-7 flex flex-row">
          <img src="/images/afrisplash_logo.svg" alt="" />
          <div>
            <p className="mb-1">Afrisplash Remotely</p>
            <p className="text-sm">
              <span className="mr-2">May 30, 2022 |</span>
              <span className="mr-2">5 mins read |</span>
              <span>4200 views</span>
            </p>
          </div>
        </div>

        <Link href="" passHref>
          <Button
            tag="a"
            classes=" border-[1px] py-4 px-2 mb-12 bg-primary_green text-white rounded-lg text-sm w-[100%] h-[56px] md:max-w-[100%] flex flex-row items-center justify-center cursor-pointer hover:opacity-80"
          >
            <span className="mr-2">Read blog</span>
            <ArrowRightIcon className="h-5 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

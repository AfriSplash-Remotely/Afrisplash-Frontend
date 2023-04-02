<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import arrowLeft from "assets/icons/arrow-left.svg";
import logo from "assets/afrisplash-logo-main.png";
import forgotImg from "assets/forgot-image.png";
import sms from "assets/sms.png";
import { NextPage } from "next";

const ForgotPassword: NextPage = () => {
  return (
    <div className="p-1">
      <div className="max-w-[1440px] mr-auto ml-auto">
        <div className="mx-auto flex align-item-center justify-center py-2">
          <Image src={logo} alt="logo" />
        </div>
        <div className={`max-w-[560px] min-h-[50vh] p-3 md:p-6  bg-[#fff] md:shadow-[4px_4px_32px_rgba(0,0,0,0.1)] md:backdrop-opacity-20 rounded-[24px] mr-auto ml-auto`}>
          <Image
            src={arrowLeft}
            alt="arrow"
            className="rounded-full p-2 w-10 bg-gray-200"
          />
          <div className="p-6 md:pX-24 md:py-6">

            <Image
              src={forgotImg}
              alt="forgotten-image"
              className="flex justify-content-center items-center mx-auto"
              width={200}
              height={150}
            />
            <h3 className="text-center font-semibold text-3xl mb-8">Forgot Password</h3>
            <p className="text-gray-700  mx-auto text-left text-m">
              Enter your email address and we’ll send you instructions on how to
              reset your password.
            </p>
            <div className="px-3 md:px-6">
              <div className="border-2 border-black-400 outline-none rounded-md mx-auto flex items-center mt-3 mb-8 p-2 w-full gap-2 h-14"
              >
                <div className=" h-fit w-fit">
                  <Image
                    src={sms}
                    alt="sms"
                  />
                </div>
                <input
                  type="text"
                  placeholder="nifemijoy@gmail.com"
                  className="outline-none w-full h-full"
                />
              </div>
              <button className=" bg-black  outline-none rounded-md mx-auto flex items-center justify-content-content mt-3 mb-3 md:mb-24  p-2 py-4 w-full">
                <span className="font-normal text-center w-full text-md text-white">
                  Send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
=======
import React from 'react';
import Image from 'next/image';
import logo from "assets/logo.png";
import { NextPage } from 'next';

const forgotPassword: NextPage = () => {
  return (
    <section className='bg-white w-full p-4 '>
      <Image src={logo} alt="logo" />
    </section>
  )
}

export default forgotPassword;
>>>>>>> 4835371545a0c5e9e622eb5103a8dd4754eb5dac

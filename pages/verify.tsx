import React from "react";
import Image from "next/image";
import Link from "next/link";
import google from "assets/authentication/check-mail.svg";

const Verify = () => {
  return (
    <div className="space-y-8 md:space-y-14">
      <div className="flex items-center">
        <Link href="/">
          <span className="mx-auto items-center flex ">
            <Image
              src="/main_logo.svg"
              height="70%"
              width="70%"
              className="flex-none"
            />
            <p className="font-bold flex-none">AfriSplashRemotely</p>
          </span>
        </Link>
      </div>

      <div className="container w-10/12 mx-auto">
        <div className=" w-11/12 lg:w-8/12 xl:w-6/12 rounded-xl mx-auto shadow-none lg:shadow-2xl py-20 text-center space-y-5">
          <Image src={google} alt="google photo " />
          <div>
            <h2 className="text-3xl text-center leading-10 font-semibold sm:text-1xl">
              Check Your Mail!
            </h2>
            <p className="pt-2 ">
              We just sent you the instructions to reset your <br /> password or{" "}
              <a
                href="#"
                className="text-green-600 underline leading-8 font-medium"
              >
                resend it.
              </a>
            </p>
          </div>

          <button className="rounded-xl bg-dark_blue w-11/12 md:w-7/12 h-12 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;

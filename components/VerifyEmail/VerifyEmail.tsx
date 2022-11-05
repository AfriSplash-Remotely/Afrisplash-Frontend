import React from "react";
import Link from "next/link";

function VerifyEmail() {
  return (
    <>
      {" "}
      <div className="max-w-[1372px] top-[387px] w-full h-10 absolute flex text-center justify-center content-center">
        {" "}
        <p className=" font-['Inter'] not-italic font-semibold text-3xl leading-10 capitalize text-black pr-8 pl-8 text-center">
          Verify Your Email !
        </p>{" "}
      </div>{" "}
      <div className="max-h-[80px] top-[462px] max-w-screen-lg w-full absolute flex text-center justify-center content-center">
        {" "}
        <p className="font-['Inter'] not-italic font-normal text-base leading-7 text-center pr-12 pl-12 text-gray-700">
          {" "}
          You&apos;ve entered &quot;email&quot; as the email address for your
          account. Please verify this email address by clicking the button
          below.{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex absolute right-0 left-0 flex-col justify-center items-center bottom-5">
        {" "}
        <button className="max-w-[343px] rounded-[16px] top-[-80px] w-full h-10 bg-gray-900 relative">
          {" "}
          <p className="font-['Inter'] w-30 h-4 not-italic font-bold text-sm leading-4 text-gray-100 text-center mr-auto ml-auto ">
            <Link href={"/auth/email-verified"}>Verify Email</Link>
          </p>{" "}
        </button>{" "}
      </div>{" "}
      <div className="max-w-screen-lg w-full top-[660px] h-12 absolute text-center justify-center">
        {" "}
        <p className="font-['Inter'] not-italic font-normal text-sm leading-5 flex items-center text-gray-700 text-center justify-center mr-auto ml-auto">
          {" "}
          Or copy and paste this link into your browser{" "}
        </p>{" "}
      </div>{" "}
      <div className="max-w-screen-lg w-full top-[680px] h-16 absolute flex flex-wrap text-center justify-center content-center">
        <a
          className="font-['Inter'] not-italic font-normal text-sm leading-5 flex truncate items-center text-center justify-center text-[#0D5520] visited:text-green-900"
          href="https://www.afrisplash.com/verifyemail/ibrahim/gmail"
        >
          {" "}
          https: //www.afrisplash.com/verifyemail/ibrahim/gmail
        </a>{" "}
      </div>
    </>
  );
}

export default VerifyEmail;

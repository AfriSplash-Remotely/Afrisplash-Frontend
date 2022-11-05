import React from "react";

function EmailVerified() {
  return (
    <>
      {" "}
      <div className="w-full max-w-[1372px] top-[387px] h-10 absolute flex text-center justify-center content-center">
        {" "}
        <p className="font-['Inter'] not-italic font-semibold text-3xl leading-10 capitalize text-black text-center pr-8 pl-8  max-[300px]:text-2xl max-[300px]:leading-8 max-[300px]:pl-2 max-[300px]:pr-2">
          Verify Your Email !
        </p>{" "}
      </div>{" "}
      <div className="max-h-[80px] top-[462px] max-w-screen-lg w-full absolute flex text-center justify-center content-center">
        {" "}
        <p className="font-['Inter'] not-italic font-normal text-base leading-7 text-center pr-12 pl-12 text-gray-700">
          {" "}
          You have successfully verified your email address, you can now proceed
          to login to your profile.{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex absolute right-0 left-0 flex-col justify-center items-center bottom-5">
        {" "}
        <button className="max-w-[343px] rounded-[16px] top-[-80px] w-full h-10 bg-gray-900 relative">
          {" "}
          <p className="font-['Inter'] w-30 h-4 not-italic font-bold text-sm leading-4 text-gray-100 text-center mr-auto ml-auto ">
            Go To Login
          </p>{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
}

export default EmailVerified;

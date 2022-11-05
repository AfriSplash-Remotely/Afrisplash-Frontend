import React from "react";
import Link from "next/link";
import Button from "components/atoms/Button/Button";

function EmailVerified() {
  return (
    <div>
      <p
        className="mb-4 mt-8 font-['Inter'] font-semibold text-3xl leading-10 
        text-black text-center max-[300px]:text-2xl max-[300px]:leading-8"
      >
        Email address Verified!
      </p>
      <div className="w-full text-center ">
        <p className="font-['Inter']  font-normal text-base leading-7 text-center px-12 text-gray-700">
          You have successfully verified your email address, you can now proceed
          to login to your profile.
        </p>
      </div>
      <div className="mx-auto w-fit">
        <Link href="/auth/login" passHref>
          <Button classes="w-[343px] rounded-2xl my-8 w-full h-10 bg-gray-900 m-auto">
            <span className="font-['Inter'] w-30 h-4 font-bold text-sm leading-4 text-gray-100 text-center mr-auto ml-auto ">
              Go To Login
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EmailVerified;

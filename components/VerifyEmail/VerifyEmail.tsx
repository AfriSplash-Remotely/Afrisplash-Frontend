import React from "react";
import Link from "next/link";
import Button from "components/atoms/Button/Button";

function VerifyEmail() {
  return (
    <div>
      <p className="font-['Inter'] font-semibold text-3xl leading-10 text-black pt-8 text-center">
        Verify Your Email !
      </p>
      <div className="w-full text-center px-2 pb-2 md:px-12 md:pb-12">
        <p className="font-['Inter'] font-normal text-base leading-7 text-gray-700">
          You&apos;ve entered &quot;email&quot; as the email address for your
          account. Please verify this email address by clicking the button
          below.
        </p>
        <div className="mx-auto w-fit">
          <Link href="/auth/email-verified" passHref>
            <Button classes="w-[343px] rounded-2xl my-8 w-full h-10 bg-gray-900 m-auto">
              <span className="font-['Inter'] font-bold text-sm leading-4 text-gray-100 text-center mr-auto ml-auto ">
                Verify Email
              </span>
            </Button>
          </Link>
        </div>
        <div className="w-full text-center font-normal text-sm font-['Inter'] leading-5">
          <p className="text-gray-700 mb-1">
            Or copy and paste this link into your browser
          </p>
          <a
            className="truncate text-[#0D5520] visited:text-green-900"
            href="https://www.afrisplash.com/verifyemail/ibrahim/gmail"
          >
            https: //www.afrisplash.com/verifyemail/ibrahim/gmail
          </a>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;

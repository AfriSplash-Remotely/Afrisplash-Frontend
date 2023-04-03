import React from "react";
import Image from "next/image";
import Styles from "styles/Forgot.module.scss";
import arrowLeft from "assets/icons/arrow-left.svg";
import logo from "assets/afrisplash-logo-main.png";
import forgotImg from "assets/forgot-image.png";
import sms from "assets/sms.png";

const ForgotPassword = () => {
  return (
    <div className={`${Styles.container} py-8 px-10`}>
      <div className="mx-auto flex align-item-center justify-center py-2">
        <Image src={logo} alt="logo" />
      </div>
      <div className={`${Styles.forgotbx} py-4 px-4 w-3/5 mx-auto mt-12`}>
        <Image
          src={arrowLeft}
          alt="arrow"
          className="rounded-full p-2 w-10 bg-gray-200"
        />
        <Image
          src={forgotImg}
          alt="forgotten-image"
          className="flex justify-content-center align-items-center mx-auto"
          width={200}
          height={150}
        />
        <h3 className="text-center font-semibold text-2xl">Forgot Password</h3>
        <p className="text-gray-700 w-3/5 mx-auto text-left text-m">
          Enter your email address and we’ll send you instructions on how to
          reset your password.
        </p>
        <input
          type="text"
          placeholder="
            nifemijoy@gmail.com
          "
          className="border-2 border-black-400 outline-none rounded-md mx-auto flex align-items-center mt-3 mb-3 p-2 w-6/12 "
        />
        <button className="bg-black  outline-none rounded-md mx-auto flex align-items-center justify-content-content mt-3 mb-3 p-2 w-6/12">
          <span className="font-normal text-center w-full text-md text-white">
            Send
          </span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import mail from "../../assets/check-mail.png";
import logo from "../../assets/logo.png";
import styles from "../../styles/CheckMail.module.scss";

const checkEmail = () => {
  return (
    <div className="w-full">
      <div>
        <nav className={`flex items-center justify-center mb-10`}>
          <Image src={logo} alt="afrisplash" />
          <h2 className={`text-base font-[600]`}>AfriSplashRemotely</h2>
        </nav>
      </div>

      <div className={`${styles.mail} w-full `}>
        <div className={`${styles.mailImg} `}>
          <Image src={mail} alt="mail" />
          <h2
            className={`text-center font-[600] text-[1.5rem] w-[16.2rem] pb-[1.375rem] pt-8`}
          >
            Check Your Mail!
          </h2>
          <p className={`font-light w-[24rem] text-center`}>
            We just emailed you the instructions to reset your
            password or 
            <Link href="" className={`text-sunglow underline ml-1`}>
               resend it
            </Link>
            .
          </p>
          <Link href={"/auth/login"} className="w-full flex justify-center">
            <button
              className={`mt-8 w-10/12 bg-dark_blue p-[10px] text-white rounded-[1rem] ${styles.joinNowBtn}`}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default checkEmail;

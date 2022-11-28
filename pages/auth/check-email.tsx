import React from "react";
import Image from "next/image";
import Link from "next/link";
import mail from "../../assets/check-mail.png";
import logo from "../../assets/logo.png";
import styles from "../../styles/CheckMail.module.scss";

const checkEmail = () => {
  return (
    <div>
      <div>
        <nav className={`flex items-center justify-center mb-[7.438rem]`}>
          <Image src={logo} alt="afrisplash" />
          <h2 className={`text-base font-[600]`}>AfriSplashRemotely</h2>
        </nav>
      </div>

      <div className={`${styles.mail} `}>
        <div className={`${styles.mailImg}`}>
          <Image src={mail} alt="mail" layout="responsive" />
          <h2
            className={`text-center font-[600] text-[1.5rem] w-[16.2rem] pb-[1.375rem] pt-8`}
          >
            Check Your Mail!
          </h2>
          <p className={`font-light w-[24rem]`}>
            We just emailed you the instructions to reset your
          </p>
          <p className={`font-light ml-[5rem]`}>
            password or
            <Link href="">
              <a className={`text-sunglow underline`}> resend it</a>
            </Link>
            .
          </p>
          <Link href={"/auth/login"}>
            <button
              className={`mt-8 w-full bg-dark_blue p-[10px] text-white rounded-[1rem] ${styles.joinNowBtn}`}
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

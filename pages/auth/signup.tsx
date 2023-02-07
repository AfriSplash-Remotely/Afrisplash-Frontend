import React, { useState } from "react";
import {
  EnvelopeIcon,
  EyeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import africanwomansmiling from "../../assets/africanwomansmiling.png";
import logo from "../../assets/logo.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import google from "../../assets/svg/google.svg";
import styles from "../../styles/Signup.module.scss";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordFieldType, setPasswordFieldType] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordFieldType(!passwordFieldType);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    axios.post(
      "https://api.afrisplash.com/api/v1/auth/register", data
    ).then((res)=>{
      console.log(res);
      return res;
    })
  };
  console.log(watch("first_name"));
  return (
    <div className={`flex ${styles.container}`}>
      <div className={`bg-white mt-8 ml-[2rem] lg:ml-[8.5rem] ${styles.row}`}>
        <nav className={`flex items-center`}>
          <Image src={logo} alt="afrisplash" />
          <h2 className={`font-[500] text-base`}>AfriSplashRemotely</h2>
        </nav>
        <div className={`mt-[4.75rem] mx-auto`}>
          <h2
            className={`font-[500] text-[1.5rem] lg:text-[2rem] leading-9 mb-4`}
          >
            Join The Community
          </h2>
          <p className={`w-[25rem] font-light text-base mb-14`}>
            Find your dream remote job. Get skilled mentors. Connect with other
            professionals
          </p>
        </div>
        <button
          className={`flex items-center gap-2 py-[1rem] pl-[7rem] pr-0 lg:px-[6rem] mb-8 max-w-[381px] lg:max-w-[455px] w-[95%] ${styles.googleContainer}`}
        >
          <Image src={google} alt="google" />
          <p className={`font-[500] text-[0.875rem]`}>Sign up with Google</p>
        </button>

        <h2 className={`w-[92%] lg:w-[69%] ${styles.divider}`}>
          <span
            className={`text-light_grey bg-white font-[400] text-[0.875rem] ${styles.emailSpan}`}
          >
            or with email
          </span>
        </h2>
        <form className={`mt-9`} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.nameContainer}`}>
            {/**First Name */}
            <div className={`w-[46%] lg:w-[35%]`}>
              <div className={`${styles.separator}`}>
                <div className={`${styles.inputContainer}`}>
                  <span className={`${styles.userIcon}`}>
                    <UserIcon className="w-4 h-4 " />
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`${styles.inputField}`}
                    {...register("first_name", { required: true })}
                    aria-invalid={errors.first_name ? "true" : "false"}
                  />
                </div>
              </div>
              {errors.first_name?.type === "required" && (
                <p role="alert" className="error_message pl-2 py-2">
                  First name is required
                </p>
              )}
            </div>

            {/**Surname */}
            <div className={`w-[46%] lg:w-[35%]`}>
              <div className={`${styles.inputContainer}`}>
                <span className={`${styles.userIcon}`}>
                  <UserIcon className="w-4 h-4 " />
                </span>
                <input
                  type="text"
                  placeholder="Surname"
                  className={`${styles.inputField}`}
                  {...register("last_name", { required: true })}
                  aria-invalid={errors.last_name ? "true" : "false"}
                />
              </div>
              {errors.last_name?.type === "required" && (
                <p role="alert" className="error_message pl-2 py-2">
                  Surname is required
                </p>
              )}
            </div>
          </div>

          {/**Email */}
          <div>
            <div className={`mt-5 w-[92%] lg:w-[70%] ${styles.inputContainer}`}>
              <span className={`${styles.userIcon}`}>
                <EnvelopeIcon className="w-4 h-4 " />
              </span>
              <input
                type="email"
                placeholder="Email"
                className={`${styles.inputField}`}
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className="error_message pl-2 py-2">
                Email is required
              </p>
            )}
          </div>

          {/**Password */}
          <div>
            <div className={`mt-5 w-[92%] lg:w-[70%] ${styles.inputContainer}`}>
              <span className={`${styles.userIcon}`}>
                <LockClosedIcon className="w-4 h-4 " />
              </span>
              <input
                type={passwordFieldType ? "text" : "password"}
                placeholder="Password"
                className={`${styles.inputField}`}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,}$/i,
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <span
                className={`ml-auto ${styles.userIcon}`}
                onClick={togglePasswordVisibility}
              >
                <EyeIcon className="w-4 h-4 cursor-pointer" />
              </span>
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="error_message  pl-2 py-2">
                Password is required
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p role="alert" className="error_message w-8/12 pl-2 py-2">
                Minimum six(6) characters, at least one letter, one number and
                one special character
              </p>
            )}
          </div>

          {/**Talent account */}
          <div className={`mt-5 w-[92%] lg:w-[70%]`}>
            {/* <span className={`relative top-[1.8rem] z-50 ${styles.userIcon}`}>
              <UserCircleIcon className="w-4 h-4 ml-[.9rem]" />
            </span> */}
            <Select placeholder="Talent account" />
          </div>

          {/**Join now */}
          <input
            type="submit"
            value="Join Now"
            className={`mt-8 w-[92%] lg:w-[70%] bg-dark_blue p-[10px] text-white rounded-[0.625rem] ${styles.joinNowBtn}`}
          />
        </form>
        <div
          className={`flex mt-12 ml-[5rem] items-center text-center gap-[0.375rem] mb-[6rem]`}
        >
          <p className={`text-[14px] font-[500]`}>Already have an account?</p>
          <Link
            href="/auth/login"
            className={`text-sunglow text-base font-semibold`}
          >
            Log in
          </Link>
        </div>
      </div>
      <div className={`bg-primary_yellow hidden lg:flex ${styles.row}`}>
        <div className={`${styles.span2} relative col-span-3 bg-[#FDF1C9]`}>
          <div
            className={`${styles.bg}  pt-10 mt-[8.5rem] px-8 w-[80%] rounded-[24px] mx-auto`}
          >
            <div
              className={`absolute rounded-[24px] bg-white py-4 px-6 top-48 right-14 shadow-[4px 4px 16px rgba(0, 0, 0, 0.1)]`}
            >
              <Image src={person2} alt="africanwomansmiling.png" />
            </div>
            <p className="text-[32px] font-[600]">
              Go global- join the community to get top remote jobs from truly
              inclusive companies
            </p>
            <div
              className={`absolute rounded-[24px] bg-white py-4 px-6 bottom-60 left-14 shadow-[4px 4px 16px rgba(0, 0, 0, 0.1)]`}
            >
              <Image src={person1} alt="africanwomansmiling.png" />
            </div>
            <span className="relative left-[6rem]">
              <Image src={africanwomansmiling} alt="africanwomansmiling.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

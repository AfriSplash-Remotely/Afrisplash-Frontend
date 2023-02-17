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
import axios from "axios";

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordFieldType, setPasswordFieldType] = useState(false);
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const togglePasswordVisibility = () => {
    setPasswordFieldType(!passwordFieldType);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post("https://api.afrisplash.com/api/v1/auth/register", data)
      .then((res) => {
        console.log(res);
        return res;
      });
  };

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      height: "50px",
      borderRadius: "10px",
    }),
  };

  return (
    <div className={`flex w-full`}>
      <div className={`bg-white w-6/12`}>
        <div className="w-9/12 mx-auto">
          <nav className={`flex items-center h-32`}>
            <Image src="/admin_logo.svg" alt="afrisplash" width={150} height={150}/>
          </nav>
          <div className={`mt-4 mx-auto`}>
            <h2
              className={`font-semibold text-[1.5rem] lg:text-[2rem] leading-9 mb-4`}
            >
              Join The Community
            </h2>
            <p className={` text-base mb-14`}>
              Find your dream remote job. Get skilled mentors. Connect with
              other professionals
            </p>
          </div>
          <button
            className={`flex items-center w-full mb-6 ${styles.googleContainer}`}
          >
            <Image src={google} alt="google" />
            <p className={`font-[500] text-[0.875rem]`}>Sign up with Google</p>
          </button>

          <h2 className={` ${styles.divider}`}>
            <span
              className={`text-light_grey bg-white font-[400] text-[0.875rem] ${styles.emailSpan}`}
            >
              or with email
            </span>
          </h2>
          <form className={`mt-9 w-full`} onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">
              <div className={`${styles.nameContainer} w-full space-x-4`}>
                {/**First Name */}
                <div className={`${styles.inputContainer} w-6/12`}>
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

                  {errors.first_name?.type === "required" && (
                    <p role="alert" className="error_message pl-2 py-2">
                      First name is required
                    </p>
                  )}
                </div>

                {/**Surname */}
                <div className={`${styles.inputContainer} w-6/12`}>
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

              {/**Email */}
              <div>
                <div className={`w-full ${styles.inputContainer}`}>
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
                <div className={`w-full ${styles.inputContainer}`}>
                  <span className={`${styles.userIcon}`}>
                    <LockClosedIcon className="w-4 h-4 " />
                  </span>
                  <input
                    type={passwordFieldType ? "text" : "password"}
                    placeholder="Password"
                    className={`${styles.inputField}`}
                    {...register("password", {
                      required: "Password is required",
                      validate: (value) => {
                        if (passwordValidation.test(value)) {
                          return undefined;
                        }
                        return "Password must contain at least 6 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)";
                      },
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
                {errors.password && (
                  <p role="alert" className="error_message w-8/12  pl-2 py-2">
                    {(errors.password as any).message}
                  </p>
                )}
              </div>

              {/**Talent account */}
              <div className={` w-full`}>
                {/* <span className={`relative top-[1.8rem] z-50 ${styles.userIcon}`}>
              <UserCircleIcon className="w-4 h-4 ml-[.9rem]" />
            </span> */}
                <Select placeholder="Talent account" styles={customStyles} />
              </div>
            </div>

            {/**Join now */}
            <input
              type="submit"
              value="Join Now"
              className={`mt-12 w-full bg-dark_blue py-4 text-white rounded-xl ${styles.joinNowBtn}`}
            />
          </form>
          <div
            className={`flex justify-center mt-6 text-base`}
          >
            <p className={``}>Already have an account?</p>
            <Link
              href="/auth/login"
              className={`text-sunglow text-base ml-3 font-semibold`}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className={`bg-primary_yellow hidden lg:flex w-6/12`}>
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

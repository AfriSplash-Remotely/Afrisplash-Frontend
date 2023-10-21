import React from "react";
import Image from "next/image";
import AccountPlaceholder from "@/assets/account-placeholder.png";
import styles from "../../../styles/Account.module.scss";
import SettingsLayout from "@/layouts/settingsLayout";
import type { AccountSettings } from "store/services/setttings";
import { SubmitHandler, useForm } from "react-hook-form";

const Account = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<AccountSettings>()

  const onSubmit: SubmitHandler<AccountSettings> = () => {
    console.log('jjeje');

  }

  return (
    <SettingsLayout>
      <div className={`w-full bg-white rounded-xl p-4 md:p-12 `}>
        {/**Image Container */}
        <form className={`pb-[53px]`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`flex flex-wrap gap-1 items-center mb-8`}>
          <Image src={AccountPlaceholder} alt="" />
          <button
            className={`text-white bg-[#0D5520] rounded-lg px-[36px] py-[12px] ml-[23px] mr-[12px]`}
          >
            Upload New
          </button>
          <button className={`text-[#FF1515]`}>Remove</button>
        </div>
        <div className={`border-t-2 border-solid border-[#C4C4C4] pt-[27px]`}>
          <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
            Personal Details
          </h3>
          <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[21px]`}>
            Update and edit your personal details, click on “Save Changes” when
            you’re done editing.
          </p>
        </div>

          {/** Name Container */}
          <div className={`${styles.nameContainer}`}>
            {/**Last Name */}
            <div className={`w-full mb-[22px]`}>
              <div className={`${styles.separator}`}>
                <label
                  className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className={`border border-solid border-[#979797] pl-2 w-full rounded-lg h-[46px]`}
                  {...register("lastName", { required: "LastName is required" })}
                />
                {errors.lastName && (
                  <p role="alert" className="error_message pl-2 py-2">{(errors.lastName as any).message}</p>
                )}
              </div>
            </div>

            {/**First Name */}
            <div className={`w-full mb-[22px]`}>
              <label
                className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}
              >
                First Name
              </label>
              <input
                type="text"
                className={`border border-solid border-[#979797] pl-2  w-full rounded-lg h-[46px]`}
                {...register("firstName", { required: "FirstName is required" })}
              />
              {errors.firstName && (
                <p role="alert" className="error_message pl-2 py-2">{(errors.firstName as any).message}</p>
              )}
            </div>
          </div>

          <div className={`${styles.nameContainer}`}>
            {/**Location */}
            <div className={`w-full mb-[22px]`}>
              <div className={`${styles.separator}`}>
                <label
                  className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}
                >
                  Location
                </label>
                <input
                  type="text"
                  className={`border border-solid border-[#979797] pl-2  w-full rounded-lg h-[46px]`}
                  {...register("location", { required: "Location is required" })}
                />
                {errors.location && (
                  <p role="alert" className="error_message pl-2 py-2">{(errors.location as any).message}</p>
                )}
              </div>
            </div>

            {/**Phone Number */}
            <div className={`w-full mb-[22px]`}>
              <label
                className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}
              >
                Phone Number
              </label>
              <input
                type="number"
                className={`border border-solid border-[#979797] pl-2  w-full rounded-lg h-[46px]`}
                {...register("phone", { required: "Phone Number is required" })}
              />
              {errors.phone && (
                <p role="alert" className="error_message pl-2 py-2">{(errors.phone as any).message}</p>
              )}
            </div>
          </div>

          {/**Email */}
          <div className={`flex flex-col`}>
            <label className={`text-[#292D32] text-sm font-normal pb-1`}>
              Email Address
            </label>
            <input
              type="email"
              className={`border border-solid border-[#979797] pl-2  w-full rounded-lg h-[46px]`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p role="alert" className="error_message py-2 pl-2">{(errors.email as any).message}</p>
            )}
          </div>

          <div className={`flex flex-row gap-6 py-8`}>
            <button
              type="submit"
              className={`border-0 rounded-lg text-[15px] font-light text-[white] bg-[#0D5520] py-2  px-6`}
            >
              Save Changes
            </button>
            <button
              className={`border border-solid border-[#0D5520] rounded-lg text-[#0D5520] py-2  px-6`}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Account;

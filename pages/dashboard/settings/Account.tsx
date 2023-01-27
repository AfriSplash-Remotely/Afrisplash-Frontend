
import React from "react";
import Image from 'next/image';
import AccountPlaceholder from "../../../assets/account-placeholder.png";
import styles from "../../../styles/Account.module.scss";



const Account = (): JSX.Element => {
  return (
    <div className={`w-[733px] bg-white rounded-[12px] pl-[62px] pt-[43px]`}>
      {/**Image Container */}
      <div className={`flex items-center mb-[31px]`}>
        <Image
          src={AccountPlaceholder}
          alt=""
        />
        <button
          className={`text-white bg-[#0D5520] rounded-[9px] px-[36px] py-[12px] ml-[23px] mr-[12px]`}
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

      <form className={`pb-[53px]`}>
        {/** Name Container */}
        <div className={`${styles.nameContainer}`}>
          {/**Last Name */}
          <div className={`w-[46%] lg:w-[44%] mb-[22px]`}>
            <div className={`${styles.separator}`}>
              <label
                className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}
              >
                Last Name
              </label>
              <input
                type="text"
                className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
              />
            </div>
          </div>

          {/**First Name */}
          <div className={`w-[46%] lg:w-[47%] mb-[22px]`}>
            <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
              First Name
            </label>
            <input
              type="text"
              className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
            />
          </div>
        </div>

        <div className={`${styles.nameContainer}`}>
          {/**Location */}
          <div className={`w-[46%] lg:w-[44%] mb-[22px]`}>
            <div className={`${styles.separator}`}>
              <label
                className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}
              >
                Location
              </label>
              <input
                type="text"
                className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
              />
            </div>
          </div>

          {/**Phone Number */}
          <div className={`w-[46%] lg:w-[47%] mb-[22px]`}>
            <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
              Phone Number
            </label>
            <input
              type="number"
              className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
            />
          </div>
        </div>

        {/**Email */}
        <div className={`flex flex-col`}>
          <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
            Email Address
          </label>
          <input
            type="email"
            className={`border border-solid border-[#979797] w-[655px] rounded-[9px] h-[46px]`}
          />
        </div>

        <div className={`flex flex-row gap-[28px] pt-[45px]`}>
          <button
            className={`border-0 rounded-[9px] text-[15px] font-light text-[white] bg-[#0D5520] py-[11px] px-[59px]`}
          >
            Save Changes
          </button>
          <button
            className={`border border-solid border-[#0D5520] rounded-[9px] text-[#0D5520] py-[11px] px-[59px]`}
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}

export default Account
import React from 'react'

const Security = () => {
  return (
    <div className={`w-[733px] bg-white rounded-[12px] pl-[62px] pt-[43px]`}>
      <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
        Security
      </h3>
      <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[21px]`}>
        Change or reset your password.
      </p>
      <form className={`pb-[53px]`}>
        {/**Current Password */}
        <div className={`flex flex-col mb-[22px]`}>
          <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
            Current Password
          </label>
          <input
            type="password"
            className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
          />
        </div>

        {/**Current Password */}
        <div className={`flex flex-col mb-[22px]`}>
          <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
            Confirm Password
          </label>
          <input
            type="password"
            className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
          />
        </div>

        {/**New Password */}
        <div className={`flex flex-col`}>
          <label className={`text-[#292D32] text-[14px] font-[400] pb-[6px]`}>
            New Password
          </label>
          <input
            type="password"
            className={`border border-solid border-[#979797] w-[302px] rounded-[9px] h-[46px]`}
          />
        </div>

        <div className={`flex flex-row gap-[28px] pt-[45px]`}>
          <button
            className={`border-0 rounded-[9px] text-[15px] font-light text-[white] bg-[#0D5520] py-[11px] px-[59px]`}
          >
            Change Password
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

export default Security
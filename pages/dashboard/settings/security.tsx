import SettingsLayout from '@/layouts/settingsLayout';
import React from 'react'


const Security = (): JSX.Element => {
  return (
    <SettingsLayout>
      <div className={`w-full bg-white rounded-xl p-4 md:p-12 `}>
        <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
          Security
        </h3>
        <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[21px]`}>
          Change or reset your password.
        </p>
        <form className={`pb-[53px]`}>
          {/**Current Password */}
          <div className={`flex flex-col mb-[22px]`}>
            <label className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}>
              Current Password
            </label>
            <input
              type="password"
              className={`border border-solid border-[#979797] w-full md:w-[302px]  rounded-lg  h-[46px]`}
            />
          </div>

          {/**Current Password */}
          <div className={`flex flex-col mb-[22px]`}>
            <label className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}>
              Confirm Password
            </label>
            <input
              type="password"
              className={`border border-solid border-[#979797] w-full md:w-[302px]  rounded-lg  h-[46px]`}
            />
          </div>

          {/**New Password */}
          <div className={`flex flex-col`}>
            <label className={`text-[#292D32] text-[14px]  font-normal  pb-[6px]`}>
              New Password
            </label>
            <input
              type="password"
              className={`border border-solid border-[#979797] w-full md:w-[302px]  rounded-lg  h-[46px]`}
            />
          </div>

          <div className={`flex flex-row gap-6 py-8`}>
            <button
              className={`border-0 rounded-lg text-[15px] font-light text-[white] bg-[#0D5520] py-2 px-6`}
            >
              Change Password
            </button>
            <button
              className={`border border-solid border-[#0D5520] rounded-lg text-[#0D5520] py-2 px-6`}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </SettingsLayout>
  );
}

export default Security
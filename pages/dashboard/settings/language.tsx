import React from 'react'
import SettingsLayout from '@/layouts/settingsLayout';



const Language = (): JSX.Element => {

  return (
    <SettingsLayout>
      <div className={`w-full bg-white rounded-xl p-4 md:p-12 `}>
        <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
          Language
        </h3>
        <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[37px]`}>
          Select the language you use on Afrisplash
        </p>
        <form className={`pb-[53px]`}>
          <select
            className={`border border-solid border-[#0D5520] rounded-lg w-full py-2  outline-0`}
          >
            <option>English</option>
          </select>

          <div className={`flex flex-row gap-6 py-8`}>
            <button
              className={`border-0 rounded-lg text-[15px] font-light text-[white] bg-[#0D5520] py-2  px-6`}
            >
              Save
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
}

export default Language
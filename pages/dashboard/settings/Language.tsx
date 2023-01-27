import React from 'react'

const Language = () => {
  return (
    <div className={`w-[733px] bg-white rounded-[12px] pl-[62px] pt-[43px]`}>
      <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
        Language
      </h3>
      <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[37px]`}>
        Select the language you use on Afrisplash
      </p>
      <form className={`pb-[53px]`}>
        <select
          className={`border border-solid border-[#0D5520] rounded-[9px] pl-[30px] pr-[200px] py-[11px] outline-0`}
        >
          <option>English</option>
        </select>

        <div className={`flex flex-row gap-[28px] pt-[45px]`}>
          <button
            className={`border-0 rounded-[9px] text-[15px] font-light text-[white] bg-[#0D5520] py-[11px] px-[59px]`}
          >
            Save
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

export default Language
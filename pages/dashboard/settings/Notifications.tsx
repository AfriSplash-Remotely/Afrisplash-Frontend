import React from "react";
import ToggleButton from "components/atoms/ToggleButton";

const Notifications = (): JSX.Element => {
  return (
    <div className={`w-[733px] bg-white rounded-[12px] pl-[62px] pt-[43px]`}>
      <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
        Notifications
      </h3>
      <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[19px]`}>
        Manage your notifications.
      </p>

      <div
        className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      >
        <p className={`pt-[17px] pb-[13px]`}>Show notifications</p>
        <div className={`pt-[17px] pb-[13px]`}>
          <ToggleButton onChange={console.log} />
        </div>
      </div>

      <div
        className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      >
        <p className={`pt-[17px] pb-[13px]`}>Mentions</p>
        <div className={`pt-[17px] pb-[13px]`}>
          <ToggleButton onChange={console.log} />
        </div>
      </div>

      <div
        className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      >
        <p className={`pt-[17px] pb-[13px]`}>News</p>
        <div className={`pt-[17px] pb-[13px]`}>
          <ToggleButton onChange={console.log} />
        </div>
      </div>

      <div
        className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      >
        <p className={`pt-[17px] pb-[13px]`}>Messages</p>
        <div className={`pt-[17px] pb-[13px]`}>
          <ToggleButton onChange={console.log} />
        </div>
      </div>

      <div
        className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      >
        <p className={`pt-[17px] pb-[13px]`}>Events</p>
        <div className={`pt-[17px] pb-[13px]`}>
          <ToggleButton onChange={console.log} />
        </div>
      </div>

      <div
        className={` border-t-2 border-solid border-[#C4C4C4] w-[624px]`}
      ></div>

      <div className={`flex flex-row gap-[28px] pt-[34px] pb-[32px]`}>
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
    </div>
  );
};

export default Notifications;

import React from "react";
import ToggleButton from "components/atoms/ToggleButton";
import SettingsLayout from "@/layouts/settingsLayout";


const Notifications = (): JSX.Element => {

  return (
    <SettingsLayout>
      <div className={`w-full bg-white rounded-xl p-4 md:p-12 `}>
        <h3 className={`text-[#292D32] pb-[14px] text-[18px] font-medium`}>
          Notifications
        </h3>
        <p className={`text-[#292D32] opacity-[.52] text-[14px] pb-[19px]`}>
          Manage your notifications.
        </p>

        <div
          className={` flex justify-between border-t border-solid border-[#C4C4C4] w-full`}
        >
          <p className={`pt-[17px] pb-[13px]`}>Show notifications</p>
          <div className={`pt-[17px] pb-[13px]`}>
            <ToggleButton onChange={console.log} />
          </div>
        </div>

        <div
          className={`flex justify-between border-t border-solid border-[#C4C4C4] w-full`}
        >
          <p className={`pt-[17px] pb-[13px]`}>Mentions</p>
          <div className={`pt-[17px] pb-[13px]`}>
            <ToggleButton onChange={console.log} />
          </div>
        </div>

        <div
          className={`flex justify-between border-t border-solid border-[#C4C4C4] w-full`}
        >
          <p className={`pt-[17px] pb-[13px]`}>News</p>
          <div className={`pt-[17px] pb-[13px]`}>
            <ToggleButton onChange={console.log} />
          </div>
        </div>

        <div
          className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-full`}
        >
          <p className={`pt-[17px] pb-[13px]`}>Messages</p>
          <div className={`pt-[17px] pb-[13px]`}>
            <ToggleButton onChange={console.log} />
          </div>
        </div>

        <div
          className={`flex justify-between border-t-2 border-solid border-[#C4C4C4] w-full`}
        >
          <p className={`pt-[17px] pb-[13px]`}>Events</p>
          <div className={`pt-[17px] pb-[13px]`}>
            <ToggleButton onChange={console.log} />
          </div>
        </div>

        <div
          className={` border-t-2 border-solid border-[#C4C4C4] w-full`}
        ></div>

        <div className={`flex flex-row gap-6 py-8`}>
          <button
            className={`border-0 rounded-lg text-[15px] font-light text-[white] bg-[#0D5520] py-2 px-6`}
          >
            Save
          </button>
          <button
            className={`border border-solid border-[#0D5520] rounded-lg text-[#0D5520] py-2 px-6`}
          >
            Discard
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Notifications;

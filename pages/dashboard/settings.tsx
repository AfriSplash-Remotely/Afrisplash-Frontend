import React, { useState } from "react";
import { NextPage } from "next";
import AdminLayout from "layouts/adminLayout";
import Account from "./settings/Account";
import Language from "./settings/Language";
import Notifications from "./settings/Notifications";
import Security from "./settings/Security";
import styles from '../../styles/Settings.module.scss';

const Settings: NextPage = () => {
  const [displayComponent, setDisplayComponent] = useState(<Account />);
  const [active, setActive] = useState("1");

  const handleSettingsChange = (event:any) => {
    setActive(event.target.id);
  };

  return (
    <AdminLayout>
      <div className={` px-8 xx:px-12`}>
        <div className={`flex items-center justify-between`}>
          <h4 className={`mt-[4.5rem] font-[300] mb-[2.375rem]`}>SETTINGS</h4>
        </div>
        <div className={`flex flex-row items-start justify-between`}>
          <div className={`flex flex-col items-start`}>
            <button
              key={1}
              id={"1"}
              className={`rounded-[12px] py-[11px] px-[86px] text-[#0D5520] font-[300] mb-[25px] border border-solid border-[#0D5520] ${
                active === "1" ? `${styles.active}` : undefined
              }`}
              onClick={(e) => {
                setDisplayComponent(<Account />);
                handleSettingsChange(e);
              }}
            >
              Acount Settings
            </button>
            <button
              key={2}
              id={"2"}
              className={`rounded-[12px] py-[10px] px-[96px] text-[#0D5520] font-[300] mb-[25px] border border-solid border-[#0D5520] ${
                active === "2" ? `${styles.active}` : undefined
              }`}
              onClick={(e) => {
                setDisplayComponent(<Notifications />);
                handleSettingsChange(e);
              }}
            >
              Notifications
            </button>
            <button
              key={3}
              id={"3"}
              className={`rounded-[12px] py-[10px] px-[111px] text-[#0D5520] font-[300] mb-[25px] border border-solid border-[#0D5520] ${
                active === "3" ? `${styles.active}` : undefined
              }`}
              onClick={(e) => {
                setDisplayComponent(<Security />);
                handleSettingsChange(e);
              }}
            >
              Security
            </button>
            <button
              key={4}
              id={"4"}
              className={`rounded-[12px] py-[10px] px-[104px] text-[#0D5520] font-[300] mb-[25px] border border-solid border-[#0D5520] ${
                active === "4" ? `${styles.active}` : undefined
              }`}
              onClick={(e) => {
                setDisplayComponent(<Language />);
                handleSettingsChange(e);
              }}
            >
              Language
            </button>
          </div>
          <div>{displayComponent}</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;

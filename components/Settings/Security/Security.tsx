import React from "react";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import style from "styles/Settings.module.scss";

const Security = (): JSX.Element => {
  return (
    <section className={`w-[55vw] ${style.full} pr-10`}>
      <div
        className={`pt-14 pr-14 pl-14 flex flex-col gap-4 pb-0 ${style.Pad}`}
      >
        <h2 className="font-bold text-lg">Security</h2>
        <p>Change or reset your password.</p>
      </div>

      <div className={`p-14 flex flex-col gap-4 pt-6 ${style.Pad}`}>
        <Input
          placeholder={""}
          type={"password"}
          label={"Current Password"}
          fieldsetClass={`flex flex-col gap-3 self-start ${style.full}`}
          className={`border-2 outline-none py-2 px-3 rounded-lg w-[100%]`}
        />

        <Input
          placeholder={""}
          type={"password"}
          label={"Confirm Password"}
          fieldsetClass={`flex flex-col gap-3 self-start ${style.full}`}
          className={`border-2 outline-none py-2 px-3 rounded-lg`}
        />

        <Input
          placeholder={""}
          type={"password"}
          label={"New Password"}
          fieldsetClass={`flex flex-col gap-3 self-start ${style.full}`}
          className={`border-2 outline-none py-2 px-3 rounded-lg`}
        />
      </div>

      <div
        className={`flex justify-start pt-1 gap-5 p-14 shrink-0 ${style.media} ${style.full} ${style.col} ${style.Pad}`}
      >
        <Button
          text={"Change Password"}
          classes={`text-green-900 h-12 px-6 rounded-lg
             font-sans text-xs border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all w-[30%] shrink-0 ${style.full}`}
        />

        <Button
          text={"Discard"}
          classes={`text-green-900 h-12 px-6 rounded-lg
             font-sans text-sm border-solid text-xs
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all w-[30%] ${style.full}`}
        />
      </div>
    </section>
  );
};

export default Security;

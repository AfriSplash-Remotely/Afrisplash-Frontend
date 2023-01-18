import React from "react";
import Button from "components/atoms/Button/Button";
import style from "styles/Settings.module.scss";
import Account from "./Account";
import Billings from "./Billings";
import Language from "./Language";
import Notification from "./Notification/Notification";
import Security from "./Security";

const Index = () => {
  const [toggle, setToggle] = React.useState("account");

  const Lang = () => {
    setToggle("lang");
    console.log("lang");
  };
  const Notify = () => {
    setToggle("notification");
  };

  const Bill = () => {
    setToggle("billings");
  };

  const Secure = () => {
    setToggle("security");
  };

  const Acc = () => {
    setToggle("account");
  };

  return (
    <>
      <section className={`flex gap-x-16 w-[100%] pb-12 ${style.card_column}`}>
        {/* Button div */}
        <div className="flex flex-col gap-y-3 shrink-0">
          <Button
            text={"Account Settings"}
            classes={`bg-transparent
             text-green-900 py-3 px-14 rounded-lg
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all
               `}
            onClick={Acc}
          />

          <Button
            text={"Notifications"}
            classes={`bg-transparent
             text-green-900 py-3 px-14 rounded-lg
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all
               `}
            onClick={Notify}
          />

          <Button
            text={"Security"}
            classes={`bg-transparent
             text-green-900 py-3 px-14 rounded-lg
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all
               `}
            onClick={Secure}
          />

          <Button
            text={"Billing"}
            classes={`bg-transparent
             text-green-900 py-3 px-14 rounded-lg
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all
               `}
            onClick={Bill}
          />

          <Button
            text={"Language"}
            classes={`bg-transparent
             text-green-900 py-3 px-14 rounded-lg
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all
               `}
            onClick={Lang}
          />
        </div>

        {/* settings info */}
        <div className={`${style.settingsbg}`}>
          {toggle === "account" && <Account />}
          {toggle === "lang" && <Language />}
          {toggle === "notification" && <Notification />}
          {toggle === "billings" && <Billings />}
          {toggle === "security" && <Security />}
        </div>
      </section>
    </>
  );
};
export default Index;

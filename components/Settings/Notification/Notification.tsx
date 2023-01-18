import React, { useState } from "react";
import Button from "components/atoms/Button/Button";
import ToggleButton from "components/atoms/ToggleButton";
import style from "styles/Settings.module.scss";

const Notification = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`w-[48vw] p-16 flex flex-col gap-4 ${style.Pad} ${style.full}`}>
      <h2>Notifications</h2>
      <p className="pb-2 text-sm">Manage your notifications.</p>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <section
        className={`flex justify-between gap-x-[7rem] ${style.Break}`}
      >
        <h2>Show notifications</h2>
        <ToggleButton onChange={() => setShow(!show)} />
      </section>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <section
        className={`flex justify-between gap-x-[7rem] ${style.Notification_Break}`}
      >
        <h2>Mentions</h2>
        <ToggleButton onChange={() => setShow(!show)} />
      </section>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <section
        className={`flex justify-between gap-x-[7rem] ${style.Notification_Break}`}
      >
        <h2>Events</h2>
        <ToggleButton onChange={() => setShow(!show)} />
      </section>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <section
        className={`flex justify-between gap-x-[7rem] ${style.Notification_Break}`}
      >
        <h2>Messages</h2>
        <ToggleButton onChange={() => setShow(!show)} />
      </section>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <section
        className={`flex justify-between gap-x-[7rem] ${style.Notification_Break}`}
      >
        <h2> News</h2>
        <ToggleButton onChange={() => setShow(!show)} />
      </section>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />

      <div className={`flex gap-4 ${style.col}`}>
        <Button
          text={"Save change"}
          classes={`text-green-900 h-12 px-6 rounded-lg
             font-sans text-xs border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all w-[50%] shrink-0 ${style.full}`}
        />

        <Button
          text={"Discard"}
          classes={`text-green-900 h-12 px-6 rounded-lg
             font-sans text-sm border-solid text-xs
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all w-[50%] shrink-0 ${style.full}`}
        />
      </div>
    </div>
  );
};

export default Notification;

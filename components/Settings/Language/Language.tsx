import React from 'react'
import Select from 'react-select';
import Button from 'components/atoms/Button/Button';
import style from "styles/Settings.module.scss";


const Language = ():JSX.Element => {
  const language = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Yoruba", label: "Yoruba" },
    { value: "Igbo", label: "Igbo" },
    { value: "Hausa", label: "Hausa" },
    { value: "Calabar", label: "Calabar" },
  ];


  return (
    <section className={`w-[47vw] ${style.full} pr-10 flex flex-col`}>
      <div
        className={`pt-14 pr-14 pl-14 flex flex-col gap-4 pb-0 ${style.Pad}`}
      >
        <h2>Language</h2>
        <p>Select the language you use on Afrisplash</p>
      </div>

      <div
        className={`self-start w-[70%] p-14 flex flex-col gap-4 pt-6 ${style.Pad} ${style.full}`}
      >
        <Select options={language} placeholder={"Select Language"} />
      </div>

      <div
        className={`flex justify-start pt-1 gap-5 p-14 shrink-0 ${style.media} ${style.full} ${style.col} ${style.Pad}`}
      >
        <Button
          text={"Save"}
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
}

export default Language

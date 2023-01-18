import React from 'react'
import Image from 'next/image';
import Button from 'components/atoms/Button/Button';
import Input from "components/atoms/Input/Input";
import style from "styles/Settings.module.scss"
import User from "assets/settings/user.jpg"

const Account = (): JSX.Element => {
  return (
    <section className="flex flex-col">
      <div className={`flex gap-x-6 items-center p-10 pr-20 ${style.col}`}>
        <figure className="shrink-0">
          <Image src={User} alt="User" />
        </figure>

        <div className={`flex gap-4 ${style.col} ${style.full}`}>
          <Button
            text={"Upload New"}
            classes={`text-green-900 h-12 px-4 rounded-lg shrink-0
             font-sans text-sm border-solid
              border-[1.7px] border-green-900
               hover:bg-green-900 hover:text-white focus:bg-green-900 focus:text-white
               hover:transition-all`}
          />

          <Button
            text={"Remove"}
            classes={`text-red-600 h-12 px-4 rounded-lg
             font-sans text-sm hover:border-solid
              border-[1.7px] border-transparent
               hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white
               hover:transition-all`}
          />
        </div>
      </div>
      <hr
        style={{
          border: "1px solid #C4C4C4",
        }}
      />
      <div className="p-10 flex flex-col gap-y-3">
        <h2>Personal Details</h2>
        <p className="text-base">
          Update and edit your personal details, click on “Save Changes” when
          you’re done editing.
        </p>
        {/* Form */}
        <div className={`flex flex-col gap-y-2 w-[60%] ${style.media}`}>
          <Input
            placeholder={"Phone Number"}
            label={"Phone Number"}
            fieldsetClass={`flex flex-col gap-y-2`}
            type={"text"}
            name={"phone"}
            className={`self-start w-[100%] border-2 outline-none py-2 px-3 rounded-lg`}
          />

          <Input
            placeholder={"Email"}
            label={"Email Address"}
            fieldsetClass={`flex flex-col gap-y-2`}
            type={"email"}
            name={"email"}
            className={`self-start w-[100%] border-2 outline-none py-2 px-3 rounded-lg`}
          />

          <div
            className={`flex justify-between pt-3 gap-2 shrink-0 ${style.media} ${style.full} ${style.col}`}
          >
            <Button
              text={"Save Changes"}
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
               hover:transition-all w-[50%] ${style.full}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account

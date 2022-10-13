import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import Button from "../atoms/Button/Button";

const Newsletter = (): JSX.Element => {
  return (
    <div className="mt-[5rem] flex flex-col items-center bg-primary_yellow py-[5rem] px-4 md:px-10 xl:px-[96px]">
      <h2 className="mb-4 text-center text-[32px] leading-10">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-12 text-center text-base leading-5">
        Subscribe to receive weekly/ daily blogs post and podcast that can help
        you at what you do
      </p>

      <div className="flex w-11/12 flex-col items-center gap-4 py-4 md:flex-row md:justify-center">
        <div className="flex w-[100%] max-w-md  flex-row items-center rounded-lg bg-white_2 p-0">
          <input
            type="text"
            className="border-none bg-transparent p-4 text-sm outline-none"
            placeholder="Enter your email address"
          />
        </div>

        <Button classes="flex flex-row items-center rounded-lg bg-[#0D5520] p-3 px-6 text-white">
          <span className="mr-2">Subscribe</span>
          <BellIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;

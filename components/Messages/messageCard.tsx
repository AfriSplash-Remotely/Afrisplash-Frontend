import React from "react";
import Image from "next/image";
import { MessageT } from "@/utils";

export default function MessageCard(prop: MessageT): JSX.Element {
  const { id, avatar, name, message, createdAt, active, role } = prop;
  return (
    <div key={id} className={`border-b border-gray-300`}>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#0D5520] w-2 h-2"></div>
            <div className="relative w-8 h-8">
              <Image
                src={avatar}
                fill
                objectFit="contain"
                className="rounded-full w-full h-full border"
                alt="avatar"
              />
              <div
                className={`rounded-full ${
                  active === true ? "bg-[#56E47B]" : ""
                } w-2 h-2 absolute left-3/4 top-3/4`}
              ></div>
            </div>
            <div className="flex flex-col">
              <h5 className="text-dark_primary text-sm font-normal">{name}</h5>
              <span className="text-xs font-normal text-gray-500 opacity-60">
                {role}
              </span>
            </div>
          </div>
          <div>
            <span className="text-xs font-normal opacity-60">{createdAt}</span>
          </div>
        </div>
        <div className="px-4">
          <p className="text-xs font-normal opacity-60">
            {message.length > 100 ? message.slice(0, 100) + "..." : message}
          </p>
        </div>
      </div>
    </div>
  );
}

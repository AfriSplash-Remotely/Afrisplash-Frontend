import { FC } from "react";
import Image from "next/image";
import { messageList } from "@/utils/Messages";

import styles from "./Messages.module.scss";
import Button from "../atoms/Button/Button";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import Textarea from "../atoms/Input/Textarea";

interface conversationProps {
  activeUser: number;
}

const Conversation: FC<conversationProps> = ({ activeUser }) => {
  return (
    <div className="lg:flex-1 lg:flex lg:flex-col justify-between hidden">
      {messageList.map((user) => {
        return activeUser === user.id ? (
          <div
            key={user.id}
            className="flex-1 max-h-[87%] overflow-hidden"
          >
            <div className="flex items-start justify-between mb-2 border-b border-light_grey p-5">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={user.image}
                    alt="profile image"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-black font-normal text-sm">
                    {user.name}
                  </h4>
                  <p className="text-dark_blue text-xs font-normal">
                    {user.role}
                  </p>
                </div>
                <span className="bg-[#D6ECDC] text-[#0D5520] text-sm px-1 font-semibold rounded-sm self-start">
                  Online
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="filled"
                  classes="bg-[#D6ECDC] flex items-center text-sm px-1 font-semibold px-5 h-10 text-[#0D5520]  rounded-md text-sm capitalize"
                >
                  <BiPhoneCall fontSize={20} /> &nbsp;&nbsp;
                  <span className="lg:hidden xlg:inline">call</span>
                </Button>
                <Button
                  type="filled"
                  color="white"
                  text="View Profile"
                  classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white hover:bg-dark_blue bg-primary_green"
                />
              </div>
            </div>
            <div className={`${styles.chat_messages} p-5 max-h-[90%]`}>
              {user.convo.map((message, index: number) => (
                <div
                  key={index}
                  className={
                    message.sender === user.name
                      ? "w-4/5 xsm:w-3/5 flex items-center gap-4"
                      : "w-4/5 xsm:w-3/5  ml-auto"
                  }
                >
                  {message.sender === user.name && (
                    <div className="hidden xsm:block">
                      <Image
                        src={user.image}
                        alt="profile image"
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-center text-xs font-normal text-[#2b2b2b] py-2">
                      {message.sender !== user.name && <p>You</p>}
                      <p>12:30am</p>
                    </div>
                    <div className="mb-4 bg-[#f2f2f2] p-3 rounded-xl flex-1 w-full">
                      <p className=" text-sm font-normal">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        );
      })}

      <div className="p-5 border-t border-light_grey flex items-center gap-2">
        <Textarea
          className={`${styles.textarea}`}
          placeholder="Write a message..."
          rows={1}
        />
        <button className="bg-[#D6ECDC] rounded-lg p-2">
          <MdOutlineAttachFile fontSize={24} />
        </button>
        <button className="bg-primary_green rounded-lg p-2">
          <MdSend color="white" fontSize={24} />
        </button>
      </div>
    </div>
  );
};

export default Conversation;

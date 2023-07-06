import { FC, useState } from "react";
import Search from "../atoms/Search/Search";
import { BiMessageSquareEdit } from "react-icons/bi";
import Image from "next/image";

import styles from "./Messages.module.scss";
import Conversation from "./Conversation";
import { messageList } from "@/utils/Messages";

const Messages: FC = () => {
  const [activeUser, setActiveUser] = useState(1);


  return (
    <section className="space-y-5 py-5 px-3 font-['Inter']">
      <h2 className="text-3xl font-bold text-[#2B2B2B]">All Messages</h2>
      <div className="my-5 rounded-md border border-light_grey flex lg:max-h-min  lg:h-[550px] xl:h-[600px]">
        {/* list of messages */}
        <div
          className={`${styles.resize} p-5 w-full lg:w-80 xl:w-96 border-r border-light_grey lg:h-[550px] xl:h-[600px] overflow-y-hidden`}
        >
          <div className={`${styles.messageList} h-full overflow-y-auto`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <h3 className="text-[#2B2B2B] text-base font-bold">Messages</h3>
                <span className="bg-[#D6ECDC] text-[#0D5520] text-sm px-1 font-semibold rounded-sm">
                  {messageList.length}
                </span>
              </div>
              <button>
                <BiMessageSquareEdit fontSize={20} />
              </button>
            </div>
            <div className="py-5">
              <Search placeholder={"Search Messages"} />
            </div>
            <div>
              {messageList.map((user) => (
                <div
                  key={user.id}
                  className="py-4 border-b border-light_grey last-of-type:border-b-0 cursor-pointer"
                  onClick={() => setActiveUser(user.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary_green rounded-full"></div>
                      <div>
                        <Image
                          src={user.image}
                          alt="profile image"
                          width={36}
                          height={36}
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
                    </div>
                    <span className=" text-[#2B2B2B] text-xs font-normal ">
                      {user.lastMessageTime}
                    </span>
                  </div>
                  <p
                    className={`${styles.two_lines} text-sm font-normal text-[#252525]`}
                  >
                    {user.lastMessage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Single Conversation */}
        <Conversation activeUser={activeUser} />
      </div>
    </section>
  );
};

export default Messages;

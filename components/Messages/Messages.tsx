import { FC } from "react";
import Search from "../atoms/Search/Search";
import { BiMessageSquareEdit } from "react-icons/bi";
import Image from "next/image";
import user1 from "assets/messages/user1.png";
import user2 from "assets/messages/user2.png";

import styles from "./Messages.module.scss";

const messageList = [
  {
    image: user1,
    name: "Simi Gregory",
    role: "UI/UX Designer",
    lastMessage:
      "Hey! I want to work for your company, I have a lot of experience when it comes to this stuff...",
    lastMessageTime: "1hr ago",
  },
  {
    image: user2,
    name: "Simi Gregory",
    role: "UI/UX Designer",
    lastMessage:
      "Hey! I want to work for your company, I have a lot of experience when it comes to this stuff...",
    lastMessageTime: "1hr ago",
  },
  {
    image: user1,
    name: "Simi Gregory",
    role: "UI/UX Designer",
    lastMessage:
      "Hey! I want to work for your company, I have a lot of experience when it comes to this stuff...",
    lastMessageTime: "1hr ago",
  },
  {
    image: user2,
    name: "Simi Gregory",
    role: "UI/UX Designer",
    lastMessage:
      "Hey! I want to work for your company, I have a lot of experience when it comes to this stuff...",
    lastMessageTime: "1hr ago",
  },
];

const Messages: FC = () => {
  return (
    <section className="space-y-5 py-10 px-3 font-['Inter']">
      <h2 className="text-3xl font-bold text-[#2B2B2B]">All Messages</h2>
      <div className="my-5 rounded-md border border-light_grey">
        <div className="p-5 xsm:max-w-[375px] border-r border-light_grey">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h3 className="text-[#2B2B2B] text-base font-bold">Messages</h3>
              <span className="bg-[#D6ECDC] text-[#0D5520] text-sm px-1 font-semibold rounded-sm">
                {messageList.length}
              </span>
            </div>
            <BiMessageSquareEdit fontSize={20} />
          </div>
          <div className="py-5">
            <Search placeholder={"Search Messages"} />
          </div>
          <div>
            {messageList.map((user, index) => (
              <div
                key={`${user.name}-${index}`}
                className="py-4 border-b border-light_grey last-of-type:border-b-0"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 bg-primary_green rounded-full"></div>
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
                  <span
                    className=" text-[#2B2B2B] text-xs font-normal "
                  >
                    {user.lastMessageTime}
                  </span>
                </div>
                <p className={`${styles.two_lines} text-sm font-normal`}>{user.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;

import React from "react";
import { NextPage } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AdminLayout from "layouts/adminLayout";
import EditIcon from "@/assets/messages/editIcon";
import { mockMsgs, MessageT } from "@/utils";
import MessageCard from "@/components/Messages/messageCard";
import ChatContent from "@/components/Messages/chat/chatContent";

const Messages: NextPage = () => {
  // const [expanded, setExpanded] = React.useState(false);
  return (
    <AdminLayout>
      <div className="mb-4">
        <h1 className="text-dark_primary text-xl md:text-2xl lg:text-3xl font-bold">
          All Messages
        </h1>
      </div>
      <div className="border border-gray-300 rounded-lg w-full h-full overflow-hidden">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-2 bg-[#f8f8f8]">
              <div className="flex flex-col gap-4 md:gap-6 p-4">
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-2">
                    <h4 className="text-dark_primary font-semibold">
                      Messages
                    </h4>{" "}
                    <span className="text-sm font-semibold bg-[#D6ECDC] rounded-sm px-1">
                      12
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center space-x-3 border bg-inherit h-12 pl-3 rounded-xl">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Messages"
                    className="focus:outline-none bg-inherit w-full  border-gray-300 border-l-[none]  h-12 rounded-r-xl"
                  />
                </div>
              </div>

              <div className="w-full overflow-y-auto h-full max-h-full">
                {mockMsgs.map((msg: MessageT) => (
                  <MessageCard key={msg.id} {...msg} />
                ))}
              </div>
            </div>
            {/* col-span-3 */}
            <div className=" border-l border-gray-300 p-4">
              <div className="flex flex-grow p-5">
                <ChatContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Messages;

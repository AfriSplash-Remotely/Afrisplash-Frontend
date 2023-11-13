import { NextPage } from "next";
import MessageEditIcon from "assets/icons/message-edit.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { MessageDataType } from "@/components/atoms/Messages/types";
import { MessageData } from "@/components/atoms/Messages/MessageData";
import MessageHeader from "@/components/atoms/Messages/MessageHeader";
import MessageFooter from "@/components/atoms/Messages/MessageFooter";

const MessageLayout: NextPage = () => {
    return (
        <div className="mt-6 border-gray-300 border rounded-xl h-[70vh] lg:h-[78vh] flex overflow-hidden" >
            <div className="w-[100%] lg:w-[35%] lg:border-r h-[100%]" >
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <h3 className="font-semibold text-gray-900" >Messages</h3>
                            <div className="text-sm font-semibold bg-green-200 px-2 py-1 rounded-lg" >12</div>
                        </div>
                        <div>
                            <Image src={MessageEditIcon} alt="message-edit-icon" />
                        </div>
                    </div>
                    <div className="mt-6 border bg-none rounded-xl py-2 pl-4 overflow-hidden">
                        <div className="flex gap-2 items-center">
                            <MagnifyingGlassIcon className="bg-none w-5 h-5" />
                            <input
                                type="text"
                                placeholder='Search Messages'
                                className="focus:outline-none bg-transparent w-full pr-8 text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-[100%] overflow-y-scroll" >
                    {MessageData.map((user: MessageDataType, index) => {
                        const isFirstIndex = index === 0;

                        const bgClass = isFirstIndex ? "bg-white" : "g-transparent";
                        return (
                            <div
                                key={index}
                                className={`${bgClass} h-32 py-5 border-b w-[100%] p-4 cursor-pointer`}
                            >
                                <div className="flex items-center gap-2 w-[100%]">
                                    <div className="w-3 h-2 bg-green-700 rounded-full"></div>
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-2 items-center">
                                                <div className="flex items-baseline relative">
                                                    <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                                                        <Image
                                                            src={user.profileImage}
                                                            alt="profile-image"
                                                        />
                                                    </div>
                                                    {user.status === 'online' && (
                                                        <div className="w-2 h-2 bg-green-400 rounded-full absolute top-7 left-7" ></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-sm text-gray-900">
                                                        {user.fullName}
                                                    </h3>
                                                    <p className="text-xs text-gray-500">
                                                        {user.profession}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-xs">{user.time}</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <p className="text-sm text-gray-700">{user.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="bg-white hidden lg:block h-[100%] lg:w-[65%] relative">
                <div className="absolute w-[100%] top-0">
                    <MessageHeader />

                </div>
                <div className="absolute w-[100%] bottom-0" >
                    <MessageFooter />
                </div>
            </div>
        </div>
    );
};

export default MessageLayout;

import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import Message from "@/components/Dashboard/messages";

const Messages: NextPage = () => {
    return (
        <div className="relative">
            <div className="bg-white/90 flex items-center justify-center z-10 top-0 bottom-0 absolute right-0 left-0">
                <div className="text-3xl font-extrabold">
                    <div
                    className={`relative mx-auto w-36 h-12 sm:w-28 md:w-32 md:h-14 flex items-center cursor-pointer`}
                >
                    <Image src="/admin_logo.svg" alt="logo" fill />
                </div>
                    Coming Soon</div>
            </div>            <Message />
        </div>
    )
}


export default Messages

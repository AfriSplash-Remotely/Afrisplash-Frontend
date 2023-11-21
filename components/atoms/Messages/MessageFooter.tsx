import { NextPage } from "next";
import Image from "next/image";
import AttachmentIcon from "assets/icons/majesticons_attachment.svg";
import SendIcon from "assets/icons/Send.svg"

const MessageFooter: NextPage = () => {
    return (
        <div className="flex items-center justify-between px-6 py-8 border-t mt-3" >
            <div className="w-[80%]" >
                <input type="text" name="message" id="message" placeholder="Write a message..." className="w-full focus:outline-none" />
            </div>
            <div className="flex gap-4 items-center">
                <div className="py-[0.35rem] px-2 rounded-lg bg-gray-200 cursor-pointer">
                    <Image src={AttachmentIcon} alt="attachment-icon" width={24} />
                </div>
                <div className="py-[0.35rem] pr-2 pl-1 rounded-lg bg-green-800 cursor-pointer" >
                    <Image src={SendIcon} alt="send-icon" width={24} />
                </div>
            </div>
        </div>
    )
}

export default MessageFooter;
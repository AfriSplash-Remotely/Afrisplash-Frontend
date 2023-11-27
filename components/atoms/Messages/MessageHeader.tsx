import { NextPage } from "next";
import ProfileImage from "assets/images/simi-georgy.png"
import CallIcon from 'assets/icons/call-calling.svg'
import Image from "next/image";

const MessageHeader: NextPage = () => {
    return (
        <div className="px-6 py-6 border-b flex justify-between items-center">
            <div className="flex gap-2 items-center" >
                <div className="w-12 h-12 rounded-full object-cover" >
                    <Image src={ProfileImage} alt='profile-image' />
                </div>
                <div className="flex gap-3 items-start">
                    <div>
                        <h3 className="text-sm text-black" >Simi Gregory</h3>
                        <p className="text-xs text-gray-500">UI/UX Designer</p>
                    </div>
                    <div className="text-sm text-green-900 bg-green-200 px-3 h-6 rounded-lg" >Online</div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 bg-green-100 px-6 py-2 rounded-lg cursor-pointer">
                    <div>
                        <Image src={CallIcon} alt="call-icon" />
                    </div>
                    <div className="font-medium text-green-900">Call</div>
                </div>
                <div className="bg-green-800 text-white font-medium px-6 py-2 rounded-lg cursor-pointer">View Profile</div>
            </div>
        </div>
    )
}

export default MessageHeader;
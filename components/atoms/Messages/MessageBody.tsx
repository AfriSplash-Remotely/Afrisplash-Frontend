import Image from "next/image";
import ProfileImage2 from "assets/images/timi-george.png";

const MessageBody = (): JSX.Element => {
    return (
        <div className="flex items-center justify-between px-6 py-4  mt-3" >
            <div className="flex  justify-between gap-4">
                <div className="flex items-baseline relative">
                    <div className="w-9 h-9 rounded-full overflow-hidden object-cover">
                        <Image
                            src={ProfileImage2}
                            alt="profile-image"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full absolute top-7 left-7" ></div>
                </div>
                <div>
                   <div>
                        <p className="-mt-4 text-sm text-gray-500">12:30am</p>
                        <div className="bg-chat_gray px-2 py-4 rounded-xl w-3/4 text-center mt-2">
                            Hey! I want to work for your company, I have a lot of experience when it comes to this stuff and lots more
                        </div>
                   </div>
                    <div className="absolute right-4 py-8 w-1/2">
                        
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="-mt-4 text-sm text-gray-500">You</p>
                                <p className="-mt-4 text-sm text-gray-500">12:30am</p>
                            </div>
                            <div className="bg-chat_gray px-2 py-4 rounded-xl text-center mt-2">
                                Hey! I want to work for your company, I have a lot of experience when it comes to this stuff and lots more
                            </div>
                        </div>
                        
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default MessageBody;
import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Modal, { ModalT } from "@/components/molecules/Modal";
import pic9 from "assets/images/pic9.png";

export default function RejectionModal({ open, onClose }: ModalT): JSX.Element {
	return (
		<>
			<Modal onClose={onClose} open={open}>
				<div className="bg-white">
					<div className="flex items-center overflow-hidden space-x-6 bg-grey_2/40 pt-6 pb-3 px-6">
						<button onClick={onClose}>
							<AiOutlineClose className="text-lg font-medium" />
						</button>
						<span className="text-sm md:text-lg font-medium">
							Write a rejection mail
						</span>
					</div>
					<div className="space-y-6 p-6">
						<div className="p-6 space-y-4 -border border-red-500">
							<Image
								src={pic9.src}
								width={200}
								height={200}
								alt=""
								className="w-20 h-20 rounded-xl aspect-square"
							/>
							<div className="space-y-1 flex flex-col">
								<span className="text-lg md:text-2xl font-medium">
									John Karmazanga
								</span>
								<span className="text-xs md:text-sm font-normal">
									Am a frontend developer, with 6yrs experence in vuejs,
									React.js and typescript
								</span>
							</div>
							<span className="text-xs md:text-sm font-normal text-grey">
								Lagos, Nigeria
							</span>
						</div>

						<div className="p-6 space-y-4 -border border-red-500">
							<div className="">
								<span className="text-base md:text-lg font-medium">
									Write message
								</span>
							</div>
							<textarea
								name=""
								id=""
								cols={30}
								rows={8}
								className="w-full bg-chat_gray p-4 md:p-6 rounded-xl"
								placeholder="Hi John,
Thanks for applying to the Staff Product Designer role at Pleo.
Unfortunately, we cannot currently move forward with your application. We're sure you’re going to find a job that matches you perfectly, as your profile shows tremendous potential - and we want to wish you the best of luck on that journey!
Best regards,Pleo Team"
							></textarea>
						</div>
					</div>
					<div className="border-t border-grey_2 px-10 py-6 items-center flex justify-center">
						<div className="flex space-x-2">
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 border border-grey_4 rounded-lg text-sm md:text-base font-normal"
								onClick={() => onClose()}
							>
								<FaArrowLeftLong />
								<span>Back</span>
							</button>
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 border border-black bg-black text-white rounded-lg text-sm md:text-base font-normal"
							>
								<MdOutlineMarkEmailRead />
								<span>Send email</span>
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}

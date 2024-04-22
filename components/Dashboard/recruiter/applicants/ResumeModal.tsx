import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
	IoCloseCircleOutline,
	IoArrowDownCircleOutline,
} from "react-icons/io5";
import { BsTelephone, BsBriefcase } from "react-icons/bs";
import { MdOutlineAttachEmail, MdOutlineLocationOn } from "react-icons/md";
import Modal, { ModalT } from "@/components/molecules/Modal";
import pic9 from "assets/images/pic9.png";
import Image from "next/image";
import { IconType } from "react-icons";
import RejectionModal from "./RejectionModal";

type ModalProps = {
	setIsodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<ModalT, "children">;

export default function ResumeModal({
	open,
	onClose,
	setIsodalOpen,
}: ModalProps): JSX.Element {
	const [isRejectionOpen, setOpenRejection] = useState<boolean>(false);

	const handleOpenReject = () => {
		setIsodalOpen(!open);
		setOpenRejection(!isRejectionOpen);
	};

	return (
		<>
			<Modal onClose={onClose} open={open}>
				<div className="bg-white">
					<div className="flex items-center overflow-hidden space-x-6 bg-grey_2/40 pt-6 pb-3 px-6">
						<button onClick={onClose}>
							<AiOutlineClose className="text-lg font-medium" />
						</button>
						<span className="text-sm md:text-lg font-medium">
							John’s resume
						</span>
					</div>

					<div className="px-8 py-6 space-y-6">
						<div className="space-y-4">
							<div className="bg-grey_2 p-6 flex items-center space-x-4 -border border-red-500">
								<Image
									src={pic9.src}
									width={200}
									height={200}
									alt=""
									className="w-10 h-10 md:w-20 md:h-20 rounded-full aspect-square"
								/>
								<div className="flex flex-col ">
									<span className="text-sm md:text-lg font-semibold">
										Adegbite Damilola
									</span>
									<span className="text-xs md:text-sm font-normal">
										UI UX Designer
									</span>
								</div>
							</div>
							<div className="md:px-6">
								<p className="text-xs font-thin">
									I am a self motivated person,Lorepum dolor sitget, consectetur
									aiscingelit. Ne tsitget, consectetur adiinglor sitget,
									consectetur aiscingddsfflor sitget, cons ectetur aiscinglor
									sitget, consectetur aiscinglor sitgetfflor sitget,
									consecteturh
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="bg-grey_2 p-4">
								<span className="text-base font-medium">Contact</span>
							</div>
							<div className="space-y-2">
								<ItemCard icon={BsTelephone} data="+234 8100661300" />
								<ItemCard icon={BsBriefcase} data="www.behance.net.com" />
								<ItemCard icon={MdOutlineAttachEmail} data="deebiz@gmail.com" />
								<ItemCard icon={MdOutlineLocationOn} data="Lagos, Nigeria" />
							</div>
						</div>

						<div className="space-y-4">
							<div className="bg-grey_2 p-4">
								<span className="text-base font-medium">Education</span>
							</div>
							<div className="space-y-2 flex flex-col">
								<span className="text-sm font-normal">
									Bachelor of Arts (Accounting)
								</span>
								<span className="text-sm font-normal text-grey">
									University of Benin
								</span>
								<span className="text-sm font-normal text-grey">2017-2021</span>
							</div>
						</div>

						<div className="space-y-4">
							<div className="bg-grey_2 p-4">
								<span className="text-base font-medium">Work Experience</span>
							</div>
							<div className="space-y-2 flex flex-col">
								<span className="text-sm font-normal">
									Product Designer at Afrisplash
								</span>
								<li>
									<span className="text-sm font-normal text-grey">
										April 2021 - September 2021
									</span>
								</li>
							</div>
						</div>
					</div>
					<div className="border-t border-grey_2 p-6">
						<div className="flex space-x-2">
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 border border-grey_4 rounded-lg text-sm md:text-base font-normal"
							>
								<IoArrowDownCircleOutline />
								<span>Download resume</span>
							</button>
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 bg-red-600 text-white border border-red-600 rounded-lg text-sm md:text-base font-normal"
								onClick={handleOpenReject}
							>
								<IoCloseCircleOutline />
								<span>Reject</span>
							</button>
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 bg-green-800 text-white border border-green-800 rounded-lg text-sm md:text-base font-normal"
							>
								View Profile
							</button>
						</div>
					</div>
				</div>
			</Modal>
			<RejectionModal open={isRejectionOpen} onClose={handleOpenReject} />
		</>
	);
}
// handleOpenReject={handleOpenReject}

const ItemCard = ({ icon, data }: { icon: IconType; data: string }) => {
	const Icon = icon;
	return (
		<div className="flex items-center space-x-2">
			{<Icon />}
			<span className="text-sm font-normal">{data}</span>
		</div>
	);
};

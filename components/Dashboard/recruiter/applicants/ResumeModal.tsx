import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal, { ModalT } from "@/components/molecules/Modal";
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
	const [copiedEmail, setCopiedEmail] = useState<string>("");
	const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

	const handleOpenReject = () => {
		setIsodalOpen(!open);
		setOpenRejection(!isRejectionOpen);
	};

	const onCopyText = () => {
		setIsEmailCopied(true);
		setTimeout(() => setIsEmailCopied(false), 2000);
	};


	return (
		<>
			<Modal onClose={onClose} open={open}>
				<div className="bg-white">
					<div className="flex items-center overflow-hidden space-x-6 bg-white-smoke pt-6 pb-3 px-6">
						<button onClick={onClose}>
							<AiOutlineClose className="text-lg font-medium" />
						</button>
						<span className="text-sm md:text-lg font-medium">
							John’s resume
						</span>
					</div>

					<div className="px-8 py-6 space-y-6">
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Personal Information
							</span>
							<div className="space-y-2">
								<ItemCard title="First name" data="Precious" />
								<ItemCard title="Last name" data="Francis" />
								<ItemCard title="Email" data="deebiz@gmail.com" />
							</div>
						</div>
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Other Information
							</span>
							<div className="space-y-2">
								<ItemCard title="Job Title" data="Product Designer" />
								<ItemCard title="Country" data="Nigeria" />
								<ItemCard title="Phone number" data="+234 112 567 8903" />
								<ItemCard title="Expected salary" data="$40,000 - $200,000" />
							</div>
						</div>
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Resume
							</span>
							<div className="flex items-center space-x-6">
								<div className="flex items-center space-x-2">
									<AttachSquare /> <span className="text-sm md:text-lg font-normal text-black">Someone’s CV.pdf</span>
								</div>
								<button className="text-primary_green text-sm md:text-lg font-normal underline">
									Download
								</button>
							</div>
						</div>
					</div>
					<div className="border-t border-grey_2 p-6">
						<div className="flex space-x-2 justify-center">
							<button
								type="button"
								className="inline-flex items-center justify-center space-x-2 py-2 px-4 bg-red-600 text-white border border-red-600 rounded-lg text-sm md:text-base font-normal"

								onClick={handleOpenReject}
							>
								<IoCloseCircleOutline />
								<span className="text-sm">Reject</span>
							</button>
							<CopyToClipboard text={copiedEmail} onCopy={onCopyText}>
								<button
									type="button"
									onClick={() => setCopiedEmail("deebiz@gmail.com")}
									className={`inline-flex items-center justify-center space-x-2 py-2 px-4 ${isEmailCopied === true ? "bg-green-800/80" : "bg-green-800"
										} text-white border border-green-800 rounded-lg text-sm md:text-base font-normal`}
								>
									<MdOutlineMarkEmailRead />
									<span className="text-sm">Copy email</span>
								</button>
							</CopyToClipboard>
						</div>
					</div>
				</div>
			</Modal>
			<RejectionModal open={isRejectionOpen} onClose={handleOpenReject} />
		</>
	);
}

const ItemCard = ({ title, data }: { title: string; data: string }) => {
	return (
		<div className="flex items-center space-x-6">
			<span className="text-xs md:text-sm text-black font-medium">{title}</span>
			<span className="text-xs md:text-sm text-black font-normal">{data}</span>
		</div>
	);
};

const AttachSquare = () => {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.87 14.35L14.65 16.57C14.11 17.11 13.41 17.37 12.71 17.37C12.01 17.37 11.3 17.1 10.77 16.57C10.25 16.05 9.96 15.36 9.96 14.63C9.96 13.9 10.25 13.2 10.77 12.69L12.18 11.28C12.47 10.99 12.95 10.99 13.24 11.28C13.53 11.57 13.53 12.05 13.24 12.34L11.83 13.75C11.59 13.99 11.46 14.3 11.46 14.63C11.46 14.96 11.59 15.28 11.83 15.51C12.32 16 13.11 16 13.6 15.51L15.82 13.29C17.09 12.02 17.09 9.96 15.82 8.69C14.55 7.42 12.49 7.42 11.22 8.69L8.8 11.11C8.29 11.62 8.01 12.29 8.01 13C8.01 13.71 8.29 14.39 8.8 14.89C9.09 15.18 9.09 15.66 8.8 15.95C8.51 16.24 8.03 16.24 7.74 15.95C6.94 15.18 6.5 14.13 6.5 13.01C6.5 11.89 6.93 10.84 7.72 10.05L10.14 7.63C11.99 5.78 15.01 5.78 16.86 7.63C18.72 9.48 18.72 12.5 16.87 14.35Z"
				fill="#292D32"
			/>
		</svg>
	);
};

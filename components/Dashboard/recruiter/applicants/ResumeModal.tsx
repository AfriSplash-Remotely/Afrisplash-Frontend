import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal, { ModalT } from "@/components/molecules/Modal";
import RejectionModal from "./RejectionModal";
import { AttachSquare } from "@/assets/svg/AttachSquareIcon";
import { JobApplicantUser } from "@/api-endpoints/jobs/jobs.interface";

type ModalProps = {
	modalnfo: JobApplicantUser | null
	setIsodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<ModalT, "children">;

export default function ResumeModal({
	open,
	onClose,
	modalnfo,
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
		setTimeout(() => setIsEmailCopied(false), 1000);
	};

	if (!modalnfo) {
		return
	}

	return (
		<>
			<Modal onClose={onClose} open={open}>
				<div className="bg-white">
					<div className="flex items-center overflow-hidden space-x-6 bg-white-smoke pt-6 pb-3 px-6">
						<button onClick={onClose}>
							<AiOutlineClose className="text-lg font-medium" />
						</button>
						<span className="text-sm md:text-lg font-medium">
							{modalnfo?.first_name} resume
						</span>
					</div>

					<div className="px-8 py-6 space-y-6">
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Personal Information
							</span>
							<div className="space-y-2">
								<ItemCard title="First name" data={modalnfo?.first_name} />
								<ItemCard title="Last name" data={modalnfo?.last_name} />
								<ItemCard title="Email" data={modalnfo?.email} />
							</div>
						</div>
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Other Information
							</span>
							<div className="space-y-2">
								<ItemCard title="Job Title" data="-" />
								<ItemCard title="Country" data="-" />
								<ItemCard title="Phone number" data="-" />
								<ItemCard title="Expected salary" data="-" />
							</div>
						</div>
						<div className="space-y-4">
							<span className="text-sm md:text-lg text-black font-medium">
								Resume
							</span>
							<div className="flex items-center space-x-6">
								<div className="flex items-center space-x-2">
									<AttachSquare />{" "}
									<span className="text-sm md:text-lg font-normal text-black">
										Someone’s CV.pdf
									</span>
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
									onClick={() => setCopiedEmail(modalnfo?.email)}
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

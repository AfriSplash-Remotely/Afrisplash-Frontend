import React, { useState } from "react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";
import ResumeModal from "./ResumeModal";

type ApplicantAccordionT = {
	jobTitle: string;
	desc: string;
	candidate: {
		id: string;
		name: string;
		avatar: string;
	}[];
};

export const ApplicantAccordion = (props: ApplicantAccordionT): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isModalOpen, setIsodalOpen] = useState<boolean>(false);

	const onClose = () => {
		setIsodalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="border border-grey_2 rounded space-y-6 p-4 divide-y">
				<button
					className="w-full transition-all ease-in duration-200"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex justify-between">
						<div className="flex space-x-2 md:space-x-3">
							<div className="h-8 w-8 md:h-16 md:w-16 aspect-square rounded-xl flex items-center justify-center -border border-grey_2 shadow">
								<FcApproval className="md:text-4xl" />
							</div>
							<div className="flex flex-col items-start">
								<span className="text-base md:text-xl font-bold">
									{props.jobTitle}
								</span>
								<span className="text-xs md:text-base font-normal text-left">
									{props.desc}
								</span>
							</div>
						</div>
						{isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
					</div>
				</button>
				{isOpen ? (
					<div className="pt-4 space-y-4">
						<span className="text-xs md:text-sm font-semibold">
							List of candidates who applied for this job
						</span>
						<div className="space-y-4">
							{props.candidate.map((c) => {
								return (
									<div key={c.id} className="flex items-center space-x-3">
										<Image
											src={c.avatar}
											width={200}
											height={200}
											alt=""
											className="w-9 h-9 rounded-full aspect-square"
										/>
										<div className="flex flex-col items-start justify-between">
											<span className="text-xs md:text-sm font-semibold">
												{c.name}
											</span>
											<button
												onClick={onClose}
												className="text-[10px] md:text-xs font-thin underline"
											>
												View resume
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				) : null}
			</div>
			<ResumeModal
				onClose={onClose}
				open={isModalOpen}
				setIsodalOpen={setIsodalOpen}
			/>
		</>
	);
};

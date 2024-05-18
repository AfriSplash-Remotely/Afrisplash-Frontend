import React, { useState } from "react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";
import ResumeModal from "./ResumeModal";
import { RecruiterJobData } from "@/api-endpoints/jobs/jobs.interface";
import pic9 from "assets/images/pic9.png";

export const ApplicantAccordion = (props: Partial<RecruiterJobData>): JSX.Element => {
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
					onClick={() => {
						setIsOpen(!isOpen)
						console.log({ id: props._id });

					}}
				>
					<div className="flex justify-between">
						<div className="flex space-x-2 md:space-x-3 w-full">
							<div className="h-8 w-8 md:h-16 md:w-16 aspect-square rounded-xl flex items-center justify-center -border border-grey_2 shadow">
								<FcApproval className="md:text-4xl" />
							</div>
							<div className="flex flex-col items-start w-5/6 -border border-red-400">
								<span className="text-base md:text-lg font-semibold capitalize">
									{props.title}
								</span>
								<span className="text-xs md:text-base font-normal text-left">
									{props.description}
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
							{props.applicants?.map((c) => {
								return (
									<div key={c._id} className="flex items-center space-x-3">
										<Image
											src={pic9.src}
											width={200}
											height={200}
											alt=""
											className="w-9 h-9 rounded-full aspect-square"
										/>
										<div className="flex flex-col items-start justify-between">
											<span className="text-xs md:text-sm font-semibold">
												{c._user}
											</span>
											<button
												onClick={() => {
													onClose()
													console.log({ resumeid: c._id });

												}}
												className="text-xs md:text-xs font-thin underline text-black"
											>
												View Application
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

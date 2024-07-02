import React, { useState } from "react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";
import ResumeModal from "./ResumeModal";
import {
	JobApplicantUser,
	RecruiterJobData,
} from "@/api-endpoints/jobs/jobs.interface";
import pic9 from "assets/images/pic9.png";
import { getApplicants } from "@/api-endpoints/jobs/jobs.api";

export const ApplicantAccordion = (
	props: Partial<RecruiterJobData>
): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isModalOpen, setIsodalOpen] = useState<boolean>(false);
	const [jobId, setJobId] = useState<string | null>(null);
	const [jobApplicant, setJobApplicant] = useState<JobApplicantUser | null>(
		null
	);

	const { data: allApplicants, isLoading } = useQuery({
		queryKey: ["applicants", jobId],
		queryFn: () => {
			return getApplicants(jobId as string);
		},
		enabled: !!jobId,
		refetchOnWindowFocus: true,
	});

	const onClose = () => {
		setIsodalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="border border-grey_2 rounded space-y-6 p-4 divide-y">
				<button
					className="w-full transition-all ease-in duration-200"
					onClick={() => {
						setIsOpen(!isOpen);
						setJobId(props?._id as string);
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
						<div>
							{isLoading ? (
								<h5 className="text-sm font-medium text-gray-300">
									Loading...
								</h5>
							) : (
								<>
									{!isLoading &&
									allApplicants &&
									allApplicants?.applicants?.length === 0 ? (
										<span className="text-xs font-medium text-gray-400">
											No Applicants yet
										</span>
									) : (
										<div className="transition-all duration-700  ease-in space-y-4">
											{!isLoading &&
												allApplicants &&
												allApplicants?.applicants?.map((applicant) => {
													return (
														<div
															key={applicant._user._id}
															className="flex items-center space-x-3"
															onClick={() => {
																if (applicant) {
																	setJobApplicant(applicant._user);
																}
															}}
														>
															<Image
																src={pic9.src}
																width={200}
																height={200}
																alt=""
																className="w-9 h-9 rounded-full aspect-square"
															/>
															<div className="flex flex-col items-start justify-between">
																<span className="text-xs md:text-sm font-semibold">
																	{`${applicant._user.first_name} ${applicant._user?.last_name}`}
																</span>
																<button
																	onClick={() => {
																		onClose();
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
									)}
								</>
							)}
						</div>
					</div>
				) : null}
			</div>
			<ResumeModal
				onClose={onClose}
				open={isModalOpen}
				setIsodalOpen={setIsodalOpen}
				modalnfo={jobApplicant}
			/>
		</>
	);
};

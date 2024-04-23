import React from "react";

type ApplicantsTabT = {
	buttons: string[];
	selectedIndex: number;
	setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ApplicantsTab = (props: ApplicantsTabT): JSX.Element => {
	return (
		<div
			className={`border-4 border-white rounded-xl flex shadow-sm`}
			role="tablist"
		>
			{props.buttons.map((btn, index) => (
				<button
					key={index}
					className={`w-full flex-row flex-shrink flex-grow items-center justify-center transition-all h-8 ${
						index === props.selectedIndex ? "bg-grey_2" : "bg-white"
					} ${index === 0 ? "rounded-s-xl" : "rounded-e-xl"}`}
					onClick={() => props.setSelectedIndex(index)}
					role="tab"
					aria-selected={index === props.selectedIndex ? "true" : "false"}
					aria-controls={`tabpanel-${index}`}
				>
					<span
						className={`text-sm md:text-base font-medium ${
							index === props.selectedIndex
								? "text-primary_green"
								: "text-black"
						}`}
					>
						{btn}
					</span>
				</button>
			))}
		</div>
	);
};

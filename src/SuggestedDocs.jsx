import { ChevronRight, Star, FileText, Calendar } from "lucide-react";
import { features, getRandomArbitrary, titles } from "./utils";
import { useState } from "react";

const categories = [
	{ label: "preferiti", Icon: Star },
	{ label: "visti di recente", Icon: Calendar },
	{ label: "suggerigi", Icon: FileText },
];

export default function SuggestedDocs() {
	const [cur, setCur] = useState("preferiti");
	return (
		<div className="flex flex-col pt-6 border-t borderColor gap-2">
			<span className="minititle">{`Lista ${cur}`}</span>
			<div className="flex flex-col -mx-6 pb-3">
				{Array.from({ length: 5 }).map((_, index) => {
					const randomAvailableFeatures = getRandomArbitrary(0, 3);
					return (
						<div
							key={index}
							className="ml-4 mr-6 mb-1 p-2 hover:bg-gray-100 rounded-md cursor-pointer group flex items-center"
						>
							<div className="flex flex-col gap-1 flex-1">
								<span className="font-semibold">
									{titles[index]}
								</span>
								<div className="flex items-center gap-1">
									{features.map(({ value, Icon }, i) => {
										return (
											<div
												key={value}
												className={`p-[2px] ${
													i <= randomAvailableFeatures
														? "text-current"
														: "text-gray-300"
												}`}
											>
												<Icon size={14} />
											</div>
										);
									})}
								</div>
							</div>
							<div className="w-8 h-8 opacity-0 transition-opacity group-hover:opacity-100 flexer">
								<ChevronRight size={16} />
							</div>
						</div>
					);
				})}
			</div>
			<div className="border-t borderColor flexer gap-4 -mx-6 h-14">
				{categories.map(({ label, Icon }) => {
					return (
						<div
							key={label}
							onClick={() => setCur(label)}
							className={`p-2 rounded-md cursor-pointer ${
								cur === label
									? "bg-gray-100"
									: "text-gray-300 hover:text-gray-800"
							}`}
						>
							<Icon size={18} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

import { ChevronDown, MessageCircleQuestionMark } from "lucide-react";
import { features } from "./utils";
import { useState } from "react";

export default function FeaturesBar({ feature, setFeature }) {
	//const cl = feature === "mappa" ? "" : "max-w-7xl";
	const cl = "";
	const [open, setOpen] = useState(null);
	return (
		<div className={`${cl} bgPrimary border-b borderColor flex h-full`}>
			{features &&
				Object.keys(features).map((k) => {
					return (
						<div
							className="flex items-center flex-1 md:flex-0 px-4 border-r borderColor cursor-pointer gap-1 relative"
							key={k}
						>
							<div
								className="flex h-8 flexer gap-2"
								onClick={() =>
									setFeature(feature === k ? null : k)
								}
							>
								<div className="w-5 h-5 bg-gray-200 rounded-full" />
								<span className="font-semibold hidden md:flex whitespace-nowrap">
									{features[k]}
								</span>
							</div>
							{k !== "originale" && (
								<div
									onClick={() =>
										setOpen((i) => (i === k ? null : k))
									}
									className={`${
										open === k
											? "bgSecondary"
											: "hover:bgSecondary"
									} h-8 w-8 flexer ml-auto sm:ml-0 relative rounded -mr-2`}
								>
									<ChevronDown size="16" />
								</div>
							)}
							{open === k && (
								<>
									<div className="absolute bgPrimary border borderColor top-full z-50 -left-px h-40 w-xs"></div>
									<div
										className="fixed inset-0 z-40"
										onClick={() => setOpen(null)}
									></div>
								</>
							)}
						</div>
					);
				})}
			<div className="bg-violet-100 text-violet-700 ml-2 md:ml-auto m-1 rounded flexer px-4 font-semibold gap-2">
				<span className="hidden xl:flex">Chiedi al documento</span>
				<MessageCircleQuestionMark size={16} />
			</div>
		</div>
	);
}

import { ChevronDown } from "lucide-react";
import { features } from "./utils";

export default function FeaturesBar({ feature, setFeature }) {
	const cl = feature === "mappa" ? "" : "max-w-7xl";
	return (
		<div
			className={`${cl} bg-white border borderColor flex h-full rounded-lg mx-auto text-sm`}
		>
			{features &&
				Object.keys(features).map((k) => {
					return (
						<div
							onClick={() => setFeature(feature === k ? null : k)}
							className="flex items-center flex-1 sm:flex-0 px-4 gap-2 border-r borderColor"
							key={k}
						>
							<div className="w-5 h-5 bg-gray-200 rounded-full" />
							<span className="font-semibold hidden sm:flex">
								{k}
							</span>
							<ChevronDown
								size="16"
								className="ml-auto sm:ml-0 relative"
							/>
						</div>
					);
				})}
		</div>
	);
}

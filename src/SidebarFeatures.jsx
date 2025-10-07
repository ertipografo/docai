import { ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({ feature, setFeature }) {
	return (
		<div className="flex flex-col">
			{Object.keys(features).map((k) => {
				return (
					<div
						className="hover:text-blue-500 gap-2 h-12 flex text-xs items-center cursor-pointer"
						onClick={() => setFeature(feature === k ? null : k)}
					>
						<div className="h-5 w-5 bg-gray-200 rounded-full" />
						<span>{features[k]}</span>
						<div
							className={`scale-75 ml-auto ${
								feature !== k ? "text-gray-300" : "-rotate-90"
							}`}
						>
							<ChevronRight />
						</div>
					</div>
				);
			})}
		</div>
	);
}

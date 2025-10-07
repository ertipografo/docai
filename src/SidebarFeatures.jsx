import { ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({ feature, setFeature }) {
	return (
		<div className="flex flex-col py-6 font-semibold gap-1">
			<span className="minititle mb-2">Features:</span>
			{features.map(({ value, label, Icon }) => {
				return (
					<div
						className={`${
							value === feature
								? "bg-gray-800 text-white"
								: "hover:bg-gray-100"
						} rounded-lg gap-3 h-10 px-2 flex items-center cursor-pointer`}
						onClick={() =>
							setFeature(feature === value ? null : value)
						}
					>
						<div>
							<Icon size={16} />
						</div>
						<span>{label}</span>
						<div className="ml-auto">
							<ChevronRight size={16} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

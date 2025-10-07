import { ChevronRight } from "lucide-react";
import { features } from "./utils";

export default function SidebarFeatures({ feature, setFeature }) {
	return (
		<div className="flex flex-row xl:flex-col xl:py-6 py-2 gap-1 border-t borderColor">
			<span className="hidden xl:flex minititle mb-2">Features:</span>
			{features.map(({ value, label, Icon }) => {
				return (
					<div
						key={value}
						className={`${
							value === feature
								? "bg-gray-800 text-white"
								: "hover:bg-gray-100"
						} rounded-lg gap-3 font-semibold min-h-10 px-3 flex items-center cursor-pointer flex-1 xl:flex-0`}
						onClick={() =>
							setFeature(feature === value ? null : value)
						}
					>
						<div>
							<Icon size={16} />
						</div>
						<span className="hidden xl:flex">{label}</span>
						<div className="ml-auto">
							<ChevronRight size={16} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

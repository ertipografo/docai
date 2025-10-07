import { useState } from "react";
import { features } from "./utils";
import { Settings2, X, Download } from "lucide-react";

export default function Feature({ feature }) {
	const [open, setOpen] = useState(false);
	const currentFeature = features.find((f) => f.value === feature);
	const ComplementaryComponent = feature && currentFeature.hasComplementary;
	const CurrentFeatureIcon = currentFeature.Icon;
	return (
		<div className="flex flex-col relative border-t borderColor xl:border-t-0">
			<div className="h-(--headerHeight) gap-2 px-2 bgPrimary border-b borderColor flex items-center sticky top-0 lg:top-0 justify-between">
				{!!ComplementaryComponent && (
					<div
						onClick={() => setOpen((o) => !o)}
						className={`${
							open ? "bg-gray-100" : "bg-gray-800 text-gray-200"
						} h-8 w-8 rounded cursor-pointer  flexer`}
					>
						{open ? <X size={16} /> : <Settings2 size={16} />}
					</div>
				)}
				<div className="flex items-center gap-2 flex-1 justify-center">
					<CurrentFeatureIcon size={14} />
					<span className="font-semibold">
						{currentFeature.label}
					</span>
				</div>

				<div className="h-8 w-8 rounded cursor-pointer border borderColor flexer">
					<Download size={16} />
				</div>
			</div>
			<div className="flex-1 flex">
				{!!ComplementaryComponent && (
					<div
						className={`${
							open
								? "w-(--complementarySidebarWidth) border-r "
								: "w-0"
						} sticky top-(--headerHeight) h-(--complementarySidebarMaxHeight) flex flex-col transition-all bgPrimary z-30 overflow-hidden borderColor`}
					>
						<div className={`${open ? "block" : "hidden"}`}>
							<ComplementaryComponent />
						</div>
					</div>
				)}
				{/* <div className="w-20 bg-orange-200 h-(--complementarySidebarMaxHeight) sticky top-(--headerHeight)">
						123
					</div> */}
				<div className="bg-teal-300 flex-1">
					<div className="min-h-[3300px] bg-white p-5">{feature}</div>
				</div>
			</div>
		</div>
	);
}

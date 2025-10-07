import { useState } from "react";
import { features } from "./utils";
import { Settings2, X, Download } from "lucide-react";

export default function Feature({ feature }) {
	const [open, setOpen] = useState(false);
	const currentFeature = features.find((f) => f.value === feature);
	const ComplementaryComponent = feature && currentFeature.hasComplementary;
	const CurrentFeatureIcon = currentFeature.Icon;
	return (
		<div className="flex flex-col xl:flex-row relative">
			{/* <div className="h-0 w-0 sticky top-0 overflow-visible z-20">
				<div
					className="h-12 w-12 inset-0 bgPrimary flexer"
					onClick={() => setOpen((o) => !o)}
				>
					<Settings2 size={16} />
				</div>
			</div> */}

			{!!ComplementaryComponent && (
				<div
					className={`${
						open
							? "xl:w-(--complementarySidebarWidth)"
							: "xl:w-(--headerHeight)"
					} sticky -top-px xl:top-0 h-auto xl:h-(--sidebarHeight) flex flex-col transition-all bgPrimary border-b xl:border-b-0 xl:border-r borderColor z-30 border-t xl:border-t-0`}
				>
					<div className="flex justify-start xl:justify-end items-center">
						<div className="w-(--headerHeight)">
							<div
								onClick={() => setOpen((o) => !o)}
								className="aspect-square flexer cursor-pointer"
							>
								{open ? (
									<X size={16} />
								) : (
									<Settings2 size={18} />
								)}
							</div>
						</div>
						<div className="flex-1 flex justify-center xl:hidden gap-2">
							<div className="h-full aspect-square flexer">
								<CurrentFeatureIcon size={18} />
							</div>
							<span className="font-semibold">
								{currentFeature.label}
							</span>
						</div>
						<div className="w-(--headerHeight) flex items-center justify-center xl:hidden">
							<Download size={18} />
						</div>
					</div>
					<div
						className={`${
							open ? "flex" : "hidden"
						} p-6 bg-yellow-200 w-[75vw] max-w-(--complementarySidebarWidth) xl:w-full h-(--complementarySidebarMaxHeight) overflow-hidden xl:relative absolute top-full xl:top-auto left-0`}
					>
						<ComplementaryComponent />
					</div>
				</div>
			)}

			<div className="bgSecondary flex-1 flex flex-col">
				<div className="h-(--headerHeight) bgPrimary border-b borderColor hidden xl:flex items-center sticky top-0 justify-center">
					<div className="flex items-center h-full">
						<div className="h-full aspect-square flexer">
							<CurrentFeatureIcon size={18} />
						</div>
						<span className="font-semibold">
							{currentFeature.label}
						</span>
					</div>
				</div>
				<div className="min-h-[3300px] bg-white p-5">{feature}</div>
			</div>
		</div>
	);
}

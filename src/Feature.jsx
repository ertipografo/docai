import { useState } from "react";
import { features } from "./utils";
import { Settings2, X, Download } from "lucide-react";
import Document from "./Document";
import Chat from "./Chat";

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

				<div className="h-8 px-3 gap-2 font-semibold rounded cursor-pointer border borderColor flexer">
					<span className="hidden lg:block">Download</span>
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
				<div className="flex-1 bgSecondary">
					{feature === "mappa" ? (
						<div className="bgPrimary h-full p-4">{feature}</div>
					) : (
						<div className="mx-auto max-w-7xl p-5">
							<Document />
						</div>
					)}
				</div>
				<div className="rounded-full 2xl:rounded-none bg-gray-800 w-10 fixed bottom-6 right-6 2xl:right-0 2xl:relative 2xl:bottom-0 2xl:w-(--chatWidth) h-10 2xl:h-(--complementarySidebarMaxHeight) flex flex-col justify-between">
					<Chat />
				</div>
			</div>
		</div>
	);
}

import { useState } from "react";
import Tree from "./Tree";
import { Menu, X } from "lucide-react";

export default function Feature({ feature }) {
	const [open, setOpen] = useState(true);
	return (
		<div className="flex flex-col xl:flex-row relative">
			{/* <div className="h-0 w-0 sticky top-0 overflow-visible z-20">
				<div
					className="h-12 w-12 inset-0 bgPrimary flexer"
					onClick={() => setOpen((o) => !o)}
				>
					<Menu size={16} />
				</div>
			</div> */}

			<div
				className={`${
					open ? "xl:w-(--complementarySidebarWidth)" : "xl:w-12"
				} sticky top-0 h-auto xl:h-(--sidebarHeight) flex flex-col transition-all bgPrimary border-b xl:border-b-0 xl:border-r borderColor p-2`}
			>
				<div className="flex justify-start xl:justify-end items-center">
					<div
						onClick={() => setOpen((o) => !o)}
						className="h-8 w-8 flexer bgSecondary rounded cursor-pointer"
					>
						{open ? <X size={16} /> : <Menu size={16} />}
					</div>
				</div>
				<div className={`${open ? "flex" : "hidden"}`}>{feature}</div>
			</div>

			<div className="bgSecondary p-10 flex-1">
				<div className="h-[3300px] bg-white">1</div>
			</div>
		</div>
	);
}

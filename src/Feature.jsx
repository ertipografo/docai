import { useState } from "react";
import Tree from "./Tree";
import { TableOfContents } from "lucide-react";
export default function Feature({ feature }) {
	const [open, setOpen] = useState(true);
	const isMap = feature === "mappa";
	return (
		<div
			className={`${
				isMap ? "" : "max-w-7xl min-h-[2999px]"
			} border bg-white flex-1 flex rounded-b-lg borderColor border-t-0 w-full relative overflow-hidden`}
		>
			{isMap ? (
				<>
					<div
						onClick={() => setOpen((o) => !o)}
						className="absolute cursor-pointer top-2 left-2 bg-white rounded border borderColor h-10 min-w-10 px-2 flexer gap-2"
					>
						<TableOfContents size={16} />
						<span className="lg:flex font-semibold hidden text-xs">
							Indice
						</span>
					</div>
					<div
						className={`${
							!open && "-ml-(--mapSidebarWidth)"
						} w-(--mapSidebarWidth) transition-all p-3 pt-14 text-xs bg-white border-r borderColor`}
					>
						<Tree />
					</div>
					<div className="flex-1 flexer text-xs text-gray-300">
						Mappa
					</div>
				</>
			) : (
				<div className="w-full p-10 justify-center flex text-xs text-gray-300">
					Documento
				</div>
			)}
		</div>
	);
}

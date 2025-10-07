import { Menu, Star, FileText } from "lucide-react";
import Doc from "./Doc";
export default function OutBar({ show, setShow }) {
	const sections = [Star, FileText];

	return (
		<div className="flex flex-col relative">
			<div
				onClick={() => setShow((s) => !s)}
				className={`${
					show ? "bg-gray-800" : "hover:bg-gray-800"
				} aspect-square items-center justify-center cursor-pointer text-white hidden xl:flex`}
			>
				<Menu size={18} />
			</div>
			{sections.map((Section, idx) => (
				<div
					key={idx}
					className="relative group w-full aspect-square bg-gray-900 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white cursor-pointer"
				>
					<Section size={18} />
					<div className="pointer-events-none text-gray-200 absolute top-0 left-full w-xs bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 p-2 rounded-r">
						{Array.from({ length: 5 }).map((_, index) => (
							<Doc
								className="bg-transparent"
								key={index}
								idx={index}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

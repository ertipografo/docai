import { Menu, Star, FileText } from "lucide-react";
export default function OutBar({ show, setShow }) {
	const sections = [Star, FileText];

	return (
		<div className="flex flex-col">
			<div
				onClick={() => setShow((s) => !s)}
				className={`${
					show ? "bg-gray-700" : "hover:bg-gray-700"
				} aspect-square flex items-center justify-center cursor-pointer text-white`}
			>
				<Menu />
			</div>
			{sections.map((Section, idx) => (
				<div
					key={idx}
					className="relative group w-full aspect-square bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white cursor-pointer"
				>
					<Section />
					<div className="pointer-events-none text-gray-200 absolute top-0 left-full w-xs h-48 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-4">
						ciaone
					</div>
				</div>
			))}
		</div>
	);
}

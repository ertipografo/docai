import { Star, FileText } from "lucide-react";
export default function OutBar() {
	const sections = [Star, FileText];

	return (
		<div className="flex flex-col">
			{sections.map((Section, idx) => (
				<div
					key={idx}
					className="relative group w-full aspect-square bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white cursor-pointer"
				>
					<Section />
					<div className="text-gray-200 absolute top-0 left-full w-xs h-48 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity p-4">
						ciaone
					</div>
				</div>
			))}
		</div>
	);
}

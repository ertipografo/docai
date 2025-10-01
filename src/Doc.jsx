import { FileText } from "lucide-react";

export default function Doc({
	idx,
	className = "bg-white border border-gray-200",
}) {
	return (
		<div
			className={`${className} cursor-pointer text-xs rounded  p-2 flex items-center gap-2`}
		>
			<FileText />
			<div className="flex flex-col flex-1 gap-1">
				<span className="font-semibold">{`Documento suggerito numero ${idx}`}</span>
				<div className="text-gray-400 flex justify-between">
					<span>18 Pagine</span>
					<span>2024/25</span>
				</div>
			</div>
		</div>
	);
}

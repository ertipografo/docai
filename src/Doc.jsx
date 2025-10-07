import { FileText } from "lucide-react";

export default function Doc({
	idx,
	className = "bg-bg1 border border-borderColor",
}) {
	return (
		<div
			className={`${className} cursor-pointer rounded p-2 flex items-center gap-2`}
		>
			<FileText />
			<div className="flex flex-col flex-1 gap-1">
				<span className="font-semibold">{`Documento suggerito numero ${idx}`}</span>
				<div className="flex justify-between">
					<span>18 Pagine</span>
					<span>2024/25</span>
				</div>
			</div>
		</div>
	);
}

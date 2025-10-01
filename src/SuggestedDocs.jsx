import { FileText } from "lucide-react";
const Doc = ({ idx }) => {
	return (
		<div className="bg-white text-xs rounded border border-gray-200 p-2 flex items-center gap-2">
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
};
export default function SuggestedDocs() {
	return (
		<div className="bg-gray-50 flex flex-col p-4">
			<span className="text-xs font-semibold mb-4">
				Ti potrebbero interessare
			</span>
			<div className="flex flex-col gap-2">
				{Array.from({ length: 20 }).map((_, index) => (
					<Doc key={index} idx={index} />
				))}
			</div>
		</div>
	);
}

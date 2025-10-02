import Doc from "./Doc";

export default function SuggestedDocs() {
	return (
		<div className="bg-gray-50 flex flex-col p-4 border-b borderColor">
			<span className="text-xs font-semibold mb-4">
				Ti potrebbero interessare
			</span>
			<div className="flex flex-col gap-2">
				{Array.from({ length: 5 }).map((_, index) => (
					<Doc key={index} idx={index} />
				))}
			</div>
		</div>
	);
}

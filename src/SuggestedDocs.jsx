import Doc from "./Doc";

export default function SuggestedDocs() {
	return (
		<div className="flex flex-col p-4 border-b borderColor">
			<span className="font-semibold mb-4">
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

import Tree from "./Tree";
export default function Feature({ feature }) {
	const isMap = feature === "mappa";
	return (
		<div
			className={`${
				isMap ? "" : "max-w-7xl min-h-[2999px]"
			} border bg-white flex-1 flex rounded-b-lg borderColor border-t-0 w-full`}
		>
			{isMap ? (
				<>
					<div className="w-(--mapSidebarWidth) p-3 text-xs">
						<Tree />
					</div>
					<div className="border-l borderColor flex-1 flexer text-xs text-gray-300">
						Mappa
					</div>
				</>
			) : (
				<div>ciao</div>
			)}
		</div>
	);
}

const ToolbarItem = ({ children, cur }) => {
	const chevron = (
		<div
			className={`w-2 h-2 border-b-2 border-r-2 ${
				cur ? "border-current" : "border-gray-400"
			} rotate-45 relative -mt-[2px] ml-1`}
		></div>
	);
	return (
		<button className="flex items-center font-semibold text-xs px-6 gap-2 border-r border-gray-200 hover:bg-gray-50">
			<div className="h-4 w-4 bg-gray-200 rounded-full" />
			<span className={cur ? "" : "text-gray-400"}>{children}</span>
			{chevron}
		</button>
	);
};

export default function Toolbar() {
	return (
		<div className="bg-white sticky top-(--headerHeight) p-2">
			<div className="h-14 border rounded-lg border-gray-200 flex">
				<ToolbarItem>Riassunto</ToolbarItem>
				<ToolbarItem cur={true}>Mappa Concettuale</ToolbarItem>
				<ToolbarItem>Quiz</ToolbarItem>
				<div className="bg-purple-100 text-purple-700 rounded flex items-center px-4 text-xs font-semibold ml-auto m-2">
					Chatta col documento
				</div>
			</div>
		</div>
	);
}

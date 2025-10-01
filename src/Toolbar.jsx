import { features } from "./utils";

const ToolbarItem = ({ children, cur, onClick }) => {
	const chevron = (
		<div
			className={`w-2 h-2 border-b-2 border-r-2 ${
				cur ? "border-current" : "border-gray-400"
			} rotate-45 relative -mt-[2px] ml-1`}
		></div>
	);
	return (
		<button
			onClick={onClick}
			className="flex items-center font-semibold text-xs px-6 gap-2 border-r border-gray-200 hover:bg-gray-50"
		>
			<div className="h-4 w-4 bg-gray-200 rounded-full" />
			<span className={cur ? "" : "text-gray-400"}>{children}</span>
			{chevron}
		</button>
	);
};

export default function Toolbar({ feature, setFeature }) {
	return (
		<div className="bg-white h-full border rounded-lg border-gray-200 flex">
			{Object.keys(features).map((r) => {
				return (
					<ToolbarItem
						onClick={() => setFeature(r)}
						cur={r === feature}
					>
						{features[r]}
					</ToolbarItem>
				);
			})}

			<div className="bg-purple-100 text-purple-700 rounded flex items-center px-4 text-xs font-semibold ml-auto m-1">
				Chatta col documento
			</div>
		</div>
	);
}

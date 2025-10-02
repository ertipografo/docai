import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import PerfectScrollbar from "react-perfect-scrollbar";
export default function Sidebar() {
	return (
		<div className="h-full flex flex-col xl:overflow-hidden relative">
			<Title />
			<div className="flex-1 hidden xl:flex overflow-hidden relative">
				<PerfectScrollbar className="w-full">
					<SuggestedDocs />
				</PerfectScrollbar>
			</div>
			<div className="h-16 bg-white border-t borderColor hidden xl:flex items-center justify-center text-xs">
				Spazio banner
			</div>
		</div>
	);
}

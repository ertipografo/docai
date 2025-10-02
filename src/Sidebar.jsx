import SidebarFeatures from "./SidebarFeatures";
import SuggestedDocs from "./SuggestedDocs";
import Title from "./Title";
import PerfectScrollbar from "react-perfect-scrollbar";
export default function Sidebar({ feature, setFeature }) {
	return (
		<div className="h-full flex flex-col xl:overflow-hidden relative">
			<div className="h-14 flex items-center justify-between px-8">
				<div className="h-8 w-8 bg-gray-100 rounded" />
			</div>
			<Title />
			{/* <div className="flex-1 hidden xl:flex overflow-hidden relative">
				<PerfectScrollbar className="w-full">
					<SuggestedDocs />
				</PerfectScrollbar>
			</div>
			<div className="h-16 bg-white border-t border-gray-200 hidden xl:flex items-center justify-center text-xs">
				Spazio banner
			</div> */}
		</div>
	);
}

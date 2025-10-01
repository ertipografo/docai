import SidebarFeatures from "./SidebarFeatures";
import Title from "./Title";
import { Menu } from "lucide-react";
import PerfectScrollbar from "react-perfect-scrollbar";
export default function Sidebar({ feature, setFeature }) {
	return (
		<div className="h-full flex flex-col overflow-hidden relative">
			<div className="h-14 flex items-center justify-between px-8">
				<div className="h-8 w-8 bg-gray-100 rounded" />
				<div className="h-8 w-8 border border-gray-200 flex items-center justify-center rounded cursor-pointer">
					<Menu size={16} />
				</div>
			</div>
			<Title />
			<SidebarFeatures setFeature={setFeature} feature={feature} />
			<div className="flex-1 bg-teal-200 overflow-hidden relative">
				<PerfectScrollbar>
					<div className="bg-red-400 h-[9999px]">opapa</div>
				</PerfectScrollbar>
			</div>
			<div className="h-20 bg-teal-200">Pappa</div>
		</div>
	);
}

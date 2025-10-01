import { useState } from "react";
import Toolbar from "./Toolbar";
import OutBar from "./OutBar";
import { features } from "./utils";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Sidebar from "./Sidebar";
export default function App() {
	const [feature, setFeature] = useState(features.mappa);
	const featureMaxW =
		feature === "mappa"
			? ""
			: "mx-auto max-w-7xl rounded border border-gray-200";
	return (
		<div className="overflow-hidden h-screen text-gray-700 bg-white">
			<div className="bg-gray-900 sticky top-0 h-(--headerHeight) flex items-center text-gray-500 justify-center z-50">
				Header
			</div>
			<div className="flex h-(--sidebarHeight)">
				<div className="w-16 bg-gray-800 sticky top-(--headerHeight)">
					<OutBar />
				</div>
				<div className="flex flex-1 border border-red-400 flex-col xl:flex-row">
					<div className="w-full xl:w-md border-r border-gray-200">
						<Sidebar feature={feature} setFeature={setFeature} />
					</div>
					<div className="flex-1 bg-gray-50 h-full relative flex flex-col">
						<div className="sticky top-0 h-14 bg-white border-b border-gray-200">
							<Toolbar feature={feature} />
						</div>
						<PerfectScrollbar>
							<div className={`${feature !== "mappa" && "p-4"}`}>
								<div
									className={`${featureMaxW} mb-10 bg-white w-full h-[2200px] p-8`}
								>
									{feature}
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</div>
	);
}

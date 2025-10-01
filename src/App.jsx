import { useState } from "react";
import Toolbar from "./Toolbar";
import OutBar from "./OutBar";
import { features } from "./utils";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import Sidebar from "./Sidebar";
export default function App() {
	const [feature, setFeature] = useState(features.mappa);
	const [show, setShow] = useState(true);
	const featureMaxW = feature === "mappa" ? "" : "mx-auto max-w-7xl";
	return (
		<div className=" text-gray-700 bg-white">
			<div className="bg-gray-900 sticky top-0 h-(--headerHeight) flex items-center text-gray-500 justify-center z-50">
				Header
			</div>
			<div className="flex xl:h-(--sidebarHeight)">
				<div className="w-14 bg-gray-800 sticky top-(--headerHeight) h-(--sidebarHeight) z-50">
					<OutBar show={show} setShow={setShow} />
				</div>
				<div className="flex flex-1 flex-col xl:flex-row">
					<div
						className={`w-full xl:w-(--sidebarWidth) transition-all border-r border-gray-200 ${
							!show && "xl:-ml-(--sidebarWidth)"
						}`}
					>
						<Sidebar feature={feature} setFeature={setFeature} />
					</div>
					<div className="flex-1 bg-gray-50 h-full relative flex flex-col">
						<div className="sticky top-0 min-h-14 bg-white border-b border-gray-200">
							<Toolbar feature={feature} />
						</div>
						<PerfectScrollbar>
							<div
								className={`${
									feature !== "mappa" ? "p-4" : "p-2"
								}`}
							>
								<div
									className={`${featureMaxW} rounded border border-gray-200 mb-10 bg-white w-full h-[2200px] p-8`}
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

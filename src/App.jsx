import { useState } from "react";
import Feature from "./Feature";
import Title from "./Title";
import Toolbar from "./Toolbar";
import OutBar from "./OutBar";
import { features } from "./utils";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function App() {
	const [feature, setFeature] = useState(features.mappa);
	return (
		<div className="overflow-hidden h-screen text-gray-700 bg-white">
			<div className="bg-gray-900 sticky top-0 h-(--headerHeight) flex items-center text-gray-500 justify-center z-50">
				Header
			</div>
			<div className="flex h-(--sidebarHeight)">
				<div className="w-16 bg-gray-800 sticky top-(--headerHeight)">
					<OutBar />
				</div>
				<div className="w-md bg-white border-r border-gray-200">
					<Title />
				</div>
				<div className="flex-1 bg-gray-50 h-full relative">
					<PerfectScrollbar>
						<div className="w-full flex flex-col gap-4">
							<div className="sticky h-14 top-0">
								<Toolbar
									feature={feature}
									setFeature={setFeature}
								/>
							</div>
							<div className="bg-white max-w-7xl mx-auto w-full rounded border border-gray-200 h-[2200px]">
								kk
							</div>
						</div>
					</PerfectScrollbar>
				</div>
			</div>
		</div>
	);
}

import { useState } from "react";
import FeaturesBar from "./FeaturesBar";
import Feature from "./Feature";
import Toolbar from "./Toolbar";
import { documentTitle } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
import BottomBar from "./BottomBar";
export default function App() {
	const [feature, setFeature] = useState(null);
	const [show, setShow] = useState(null);
	const cl = "";
	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<div className="h-(--headerHeight) bg-gray-900 flexer text-gray-500">
				Header
			</div>
			<div className="flex-1 flex overflow-hidden">
				<div className="w-(--headerHeight) bg-gray-900 relative z-50">
					<OutBar show={show} setShow={setShow} />
				</div>
				<div className="flex flex-col xl:flex-row flex-1 overflow-auto">
					<div
						className={`${
							!show && "xl:-ml-(--sidebarWidth)"
						} xl:w-(--sidebarWidth) transition-all isDark bgPrimary relative z-40`}
					>
						<Sidebar />
					</div>

					<div className="flex-1 overflow-visible xl:overflow-auto">
						<div className="flex flex-col bgSecondary relative min-h-full">
							<div className="flex pl-2 pr-4 xl:hidden fixed z-30 top-14 left-14 right-0">
								<div className="bg-gray-50 flex-1 h-12 px-1 items-center flex gap-2 text-sm font-semibold">
									<div className="h-8 w-8 bg-gray-200 rounded-lg flexer text-2xl">
										🇴🇲
									</div>
									<span>{documentTitle}</span>
								</div>
							</div>
							{/* <div className="h-0 sticky top-0 z-50">
								<div className="absolute flex flex-col justify-end top-0 left-0 h-(--sidebarHeight) w-full">
									<BottomBar />
								</div>
							</div> */}

							<div className="flex flex-col relative flex-1 bg-yellow-50">
								{/* <div className="bgSecondary sticky top-24 xl:-top-2 w-full flex flex-col z-30 px-4 pt-4">
									<div
										className={`${cl} bgPrimary rounded-t-lg border borderColor h-12 w-full`}
									>
										<Toolbar feature={feature} />
									</div>
								</div>
								<div className="bgSecondary px-4 pb-20">
									<Feature feature={feature} />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

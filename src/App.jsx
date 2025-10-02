import { useState } from "react";
import FeaturesBar from "./FeaturesBar";
import Feature from "./Feature";
import Toolbar from "./Toolbar";
import { documentTitle } from "./utils";
import Title from "./Title";
import OutBar from "./OutBar";
export default function App() {
	const [feature, setFeature] = useState(null);
	const [show, setShow] = useState(null);
	const cl = feature === "mappa" ? "" : "max-w-7xl";
	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<div className="h-14 bg-gray-900 flexer text-gray-500">Header</div>
			<div className="flex-1 flex overflow-hidden">
				<div className="w-14 bg-gray-800 relative z-50">
					<OutBar show={show} setShow={setShow} />
				</div>
				<div className="flex flex-col xl:flex-row flex-1 overflow-auto">
					<div
						className={`${
							!show && "xl:-ml-(--sidebarWidth)"
						} xl:w-(--sidebarWidth) transition-all bg-white xl:border-r borderColor relative z-40`}
					>
						<Title />
					</div>
					<div className="flex-1 overflow-visible xl:overflow-auto">
						<div className="flex flex-col bg-gray-50 px-2 pb-2 relative min-h-full">
							<div className="flex pl-2 pr-4 xl:hidden fixed z-30 top-14 left-14 right-0">
								<div className="bg-gray-50 flex-1 h-12 px-2 items-center flex text-sm font-semibold">
									{documentTitle}
								</div>
							</div>
							<div className="pt-2 h-14 bg-gray-50 sticky top-10 xl:top-0 z-30">
								<FeaturesBar
									setFeature={setFeature}
									feature={feature}
								/>
							</div>
							<div className="flex flex-col relative items-center bg-rose-200 flex-1">
								<div className="bg-gray-50 sticky top-24 xl:top-14 pt-2 w-full flex flex-col items-center">
									<div
										className={`${cl} bg-white border borderColor rounded-t-lg h-12 w-full`}
									>
										<Toolbar feature={feature} />
									</div>
								</div>
								<Feature feature={feature} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

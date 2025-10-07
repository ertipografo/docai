import { useState } from "react";
import Feature from "./Feature";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";
export default function App() {
	const [feature, setFeature] = useState(features[0].value);
	const [show, setShow] = useState(true);

	return (
		<div className="flex flex-col h-screen overflow-hidden text-base">
			<div className="h-(--headerHeight) bg-gray-900 flexer text-gray-500">
				Header
			</div>
			<div className="flex-1 flex overflow-hidden">
				<div className="w-(--headerHeight) hidden xl:block bg-gray-900 relative z-50">
					<OutBar show={show} setShow={setShow} />
				</div>
				<div className="flex flex-col xl:flex-row flex-1 overflow-auto">
					<div
						className={`${
							!show && "xl:-ml-(--sidebarWidth)"
						} xl:w-(--sidebarWidth) transition-all xl:border-r borderColor bgPrimary relative z-40`}
					>
						<Sidebar feature={feature} setFeature={setFeature} />
					</div>
					<div className="flex-1 overflow-visible xl:overflow-auto">
						<div className="flex flex-col bgSecondary relative min-h-full">
							{/* <div className="flex bgPrimary border-b borderColor xl:hidden fixed z-30 top-(--headerHeight) left-0 right-0">
								<div className="flex-1 h-12 px-2 items-center flex gap-2 font-semibold leading-tight">
									<div className="text-xl">🇴🇲</div>
									<span>{documentTitle}</span>
								</div>
							</div> */}

							<div className="flex flex-col relative flex-1 bgPrimary">
								{/* <div className="bgSecondary sticky top-24 xl:-top-2 w-full flex flex-col z-30 px-4 pt-4">
									<div
										className={`${cl} bgPrimary rounded-t-lg border borderColor h-12 w-full`}
									>
										<Toolbar feature={feature} />
									</div>
								</div>
								*/}
								<Feature feature={feature} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

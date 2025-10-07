import { useState } from "react";
import Feature from "./Feature";
import { features } from "./utils";
import Sidebar from "./Sidebar";
import OutBar from "./OutBar";

export default function App() {
	const [feature, setFeature] = useState(features[0].value);
	const [show, setShow] = useState(true);

	return (
		<div className="flex flex-col h-screen overflow-hidden text-base text-text1">
			<div className="h-(--headerHeight) bg-bgDarker flexer">Header</div>
			<div className="flex-1 flex overflow-hidden">
				<div className="w-(--headerHeight) hidden lg:block bg-bgDarker relative z-50">
					<OutBar show={show} setShow={setShow} />
				</div>
				<div className="flex flex-col lg:flex-row flex-1 overflow-auto">
					<div
						className={`${
							!show && "lg:-ml-(--sidebarWidth)"
						} lg:w-(--sidebarWidth) transition-all lg:border-r border-borderColor bg-bg1 relative z-40`}
					>
						<Sidebar feature={feature} setFeature={setFeature} />
					</div>
					<div className="flex-1 overflow-visible lg:overflow-auto">
						<div className="flex flex-col bg-bg2 relative min-h-full">
							{/* <div className="flex bg-bg1 border-b border-borderColor lg:hidden fixed z-30 top-(--headerHeight) left-0 right-0">
								<div className="flex-1 h-12 px-2 items-center flex gap-2 font-semibold leading-tight">
									<div className="text-xl">🇴🇲</div>
									<span>{documentTitle}</span>
								</div>
							</div> */}

							<div className="flex flex-col relative flex-1 bg-bg1">
								{/* <div className="bg-bg2 sticky top-24 lg:-top-2 w-full flex flex-col z-30 px-4 pt-4">
									<div
										className={`${cl} bg-bg1 rounded-t-lg border border-borderColor h-12 w-full`}
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

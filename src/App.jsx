import { useState } from "react";
import Feature from "./Feature";
import Title from "./Title";
import Toolbar from "./Toolbar";
import { features } from "./utils";

export default function App() {
	const [feature, setFeature] = useState(features.mappa);
	return (
		<div className="min-h-screen text-gray-700 bg-white">
			<div className="bg-gray-900 sticky top-0 h-(--headerHeight) flex items-center text-gray-500 justify-center z-50">
				Header
			</div>
			<div className="flex">
				<div className="w-16 bg-gray-800 sticky h-(--sidebarHeight) top-(--headerHeight)"></div>
				<div className="flex-1">
					<div className="customContainer bg-gray-50">
						<div className="left" />
						<div className="main">
							<Title />
						</div>
					</div>
					<div className="customContainer">
						<Feature feature={feature} setFeature={setFeature} />
						{/* 	<div className="left">1</div>
						<div className="main">
							<Toolbar
								feature={feature}
								setFeature={setFeature}
							/>
						</div> */}
					</div>
				</div>
				{/* 	<div className="flex-1">
					<div className="customContainer border-b border-red-500">
						<div className="left">1</div>
						<div className="main">
							<div className="flex flex-col gap-2 p-4 mt-2">
								<h1 className="font-semibold text-2xl">
									Storia dell'Oman, dalla fondazione ai giorni
									nostri
								</h1>
								<p className="w-4xl text-sm text-gray-500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Illo velit cupiditate,
									fugit accusamus ipsam temporibus rerum nisi,
									veniam consequatur exercitationem
									consequuntur eum laudantium eius corrupti
									dolores dolor aliquam repellat beatae?
								</p>
							</div>
							<Toolbar />
						</div>
					</div>
					<div className="customContainer">
						<div className="left sticky h-(--sidebarHeight) top-(--headerHeight)"></div>
						<div className="border-x border-gray-200  main">23</div>
						<div className="2xl:col-span-2 col-span-8 col-start-3">
							<div className="2xl:h-(--sidebarHeight) 2xl:sticky 2xl:top-(--headerHeight)">
								3
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

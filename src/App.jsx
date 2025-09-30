import Toolbar from "./Toolbar";

export default function App() {
	return (
		<div className="min-h-screen text-gray-700">
			<div className="bg-gray-900 sticky top-0 h-(--headerHeight) flex items-center text-gray-500 justify-center">
				Header
			</div>
			<div className="flex">
				<div className="w-16 bg-gray-800 sticky h-(--sidebarHeight) top-(--headerHeight)"></div>
				<div className="flex-1 flex flex-col">
					<div className="customContainer border-b border-red-500">
						<div>1</div>
						<div>
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
						</div>
					</div>
					<div className="customContainer">
						<div className="sticky h-(--sidebarHeight) top-(--headerHeight)">
							{/* <div className="h-20 p-4 flex items-center justify-center border-b border-gray-200">
							<button className="flex-1 h-12 flex items-center justify-center font-semibold text-sm rounded-lg bg-blue-600 text-white">
								Carica nuovo
							</button>
						</div> */}
						</div>
						<div className="border-x border-gray-200 min-h-[2000px]">
							<Toolbar />
						</div>
						<div className="2xl:col-span-2 col-span-8 col-start-3">
							<div className="2xl:h-(--sidebarHeight) 2xl:sticky 2xl:top-(--headerHeight)">
								3
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
